import React from 'react'
import '../style/Profile.css';
import profile from '../assets/images/30203162105313.jpg';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { setAuthUser } from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import {getAuthUser}  from '../helpers/stoarge';
import { useSearchParams } from "react-router-dom";
function StudentProfile() {
    const [searchPrams] = useSearchParams();
    const [data, setData] = useState({});
    const [info, setInfo] = useState({});
    const [courses , setCourses] = useState([{}]);
     const auth = getAuthUser();
    useEffect(() => {
        
        axios.get("http://localhost:3001/users/studentProfile/:", { params: { id: auth.id } }).then((response) => {
            setData(response.data)
            console.log(response.data.email)
        })
        
    }, [])
    useEffect(()=>{
        axios.get('http://localhost:3001/users/studentCourses/:',{ params :{id : auth.id}}).then((response)=>{
            setCourses(response.data)
        })
    },[])
  return (
    <div className='profile1'>
            <div className='sub-profile1'>
                <div>
                    <div className='imgs-profile1'>
                        <div className='container-imgs-profile1'>
                            <img src={profile} alt='profile' className='profile-2' />
                        </div>
                    </div>
                    <div>
                        <div className='text'>
                            <p>Name: {data.name} </p>
                        </div >
                        <div className='text'>
                            <p>Email: {data.email}</p>
                        </div>
                        <div className='text'>
                            <p>ID: {data.id}</p>
                        </div>
                        <div className='text'>
                            <p>Phone: {data.phone}</p>
                        </div>
                        <div className='text'>
                            <p>Status: {data.status}</p>
                        </div>

                    </div>
                   
                </div>
                <div className='pr-student  '>
                            <table className='pr-student-table'>
                            <tbody>
                                <tr>
                                    
                                        <th>Course code </th>
                                        <th>Course name </th>
                                        <th>Course Grade</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    courses.map((d,i)=>(
                                        <tr key={i}>
                                            <td>{d.course_name}</td>
                                            <td>{d.code}</td>  
                                            <td>{d.grade}</td>
                                            
                                        </tr>
                                    ))
                                
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
         
                
            
        </div>
  )
}

export default StudentProfile
