import React from 'react'
import  { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/StudentInstructor.css';
function Allstudents() {
    const [response , setResponse] = useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3001/admin/AllStudents').then((response)=>{
            setResponse(response.data);
           
        })
    },[])
  
  return (
    <div className='st-instructor  '>
            <table className='st-instructor-table'>
                <tbody>
                    <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Phone</th>
                        <th>Actioon</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        response.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.id}</td>  
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={'/update/${d.id}'}><button className='st-instructor-Add'>update</button></Link>
                                    <button className='st-instructor-delete'>delete</button>
                                </td>    
                            </tr>
                        ))
                    
                    }
                </tbody>
            </table>
        </div>
  )
}

export default Allstudents
