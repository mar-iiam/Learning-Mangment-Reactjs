import React, { useEffect, useState } from 'react';
import '../style/Registcourse.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Field, Formik, FieldArray } from 'formik';
import { getAuthUser } from '../helpers/stoarge';
function Addcourse() {
    const auth = getAuthUser();
    const courses = [];
    const [data, setData] = useState([{}]);
    const [response , setResponse] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3001/student/registCourse").then((response) => {
            setData(response.data);
        })
    }, [])

    const Adds = (id, index) => {
        courses.push(id)
        document.getElementById(index).disabled = true;
        document.getElementById(index).style.backgroundColor = 'grey';
        console.log("hey" + courses + " " + courses.length)
    };
    const remove = (id, indexx) => {

        const index = courses.indexOf(id);
        if (index > -1) { // only splice array when item is found
            courses.splice(index, 1); // 2nd parameter means remove one item only
        }
        document.getElementById(indexx).disabled = false;
        document.getElementById(indexx).style.backgroundColor = 'red';
        console.log(courses);
    }
    const submit = (courses, st_id) => {
        axios.post("http://localhost:3001/student/registCourse", { courses: courses, student_id: st_id }).then((response) => {
            setResponse(response.data)
            console.log(response.data)
        })
        console.log(courses)
    }
    return (
        <div className='container '>
            <table className='re-table'>
          
                <tbody>
                <div>{response}</div>
                    <tr>
                        <th>Course code</th>
                        <th>Course Name</th>
                        <th>Course Instcrtor</th>
                        <th>Actioon</th>
                        <th> {
                            <button onClick={() => { submit(courses, auth.id) }}>Submit</button>
                        }</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.C_name}</td>
                                <td>{d.code}</td>
                                <td>{d.name}</td>
                                <td>
                                    <button id={i} onClick={() => { Adds(d.C_id, i) }}>Add</button>
                                    <button id={i} onClick={() => { remove(d.C_id, i) }}>Remove</button>
                                </td>

                            </tr>
                        ))

                    }
                </tbody>

            </table>

        </div>
    );

};

export default Addcourse;