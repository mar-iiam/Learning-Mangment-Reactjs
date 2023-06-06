import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/StudentInstructor.css';
import { setAuthUser, getAuthUser } from '../helpers/stoarge'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const StudentInstructor = () => {
    const auth = getAuthUser();
    const [response, setResponse] = useState([{}]);
    const [assign, setAssignMessage] = useState("");
    console.log(auth)
    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(() => {
        axios.get('http://localhost:3001/users/StudentsInstructor/:', { params: { id: auth.id } })
            .then(res => {
                setResponse(res.data)
                console.log(res.data)
                console.log(auth.id)
            })
    }, [])
    const edit = (option, id) => {
        if (option === 'grade') {
            let grade = prompt("Enter the new grade")
            axios.put("http://localhost:3001/mangeCourses//setGrade", { grade: grade, id: id }).then((response) => {
               console.log(response.data)
               refreshPage();
            })
        }
    }
    return (
        <div className='st-instructor  '>
            <table className='st-instructor-table'>
                <tbody>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th> Set Grade</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                       
                    </tr>
                </tbody>
                <tbody>
                    {

                        response.map((d, i) => {


                            return (
                                <tr key={i}>
                                    <td>{d.code}</td>
                                    <td>{d.name}</td>
                                    <td> <div className='code' onClick={() => { edit('grade', d.Student_id) }} >{d.grade}</div></td>
                                    <td>{d.Student_id}</td>
                                    <td>{d.student_name}</td>
                                   
                                </tr>
                            )

                        })

                    }
                </tbody>
            </table>
        </div>
    );
};

export default StudentInstructor;