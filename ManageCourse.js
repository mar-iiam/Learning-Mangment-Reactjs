import React, { useEffect, useState } from 'react';
import '../style/ManageCourse.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const ManageCourse = () => {
    const [data, setData] = useState([{}]);
    const [updatedName, setNameUpdate] = useState("");
    const [updatedCode, setCodeUpdate] = useState("");
    const [updatedStatus, setStatusUpdate] = useState("");
    const [deletedMessage, setDeletedCourse] = useState("");
    const [assign, setAssignMessage] = useState("");
    const [instrctor, setInstUpdate] = useState("");
    function refreshPage() {
        window.location.reload(false);
      }
    useEffect(() => {
        axios.get("http://localhost:3001/mangeCourses").then((response) => {
            setData(response.data)
        })
    }, [])
    const edit = (option, id) => {
        if (option === 'name') {
            let newName = prompt("Enter the new name ")
            axios.put("http://localhost:3001/mangeCourses/EditName", { newName: newName, id: id }).then((response) => {
                setNameUpdate(response.data)
                refreshPage();
            })
        } else if (option === 'code') {
            let newCode = prompt("Enter the new code ")
            axios.put("http://localhost:3001/mangeCourses/EditCode", { newCode: newCode, id: id }).then((response) => {
                setCodeUpdate(response.data)
                refreshPage();
            })
        } else if (option === 'status') {
            let newStatus = prompt("Enter the new status either 0 or 1  ");
            axios.put("http://localhost:3001/mangeCourses/EditStatus", { newStatus: newStatus, id: id }).then((response) => {
                setStatusUpdate(response.data)
                refreshPage();
            })
        } else {
            let newInstName = prompt("enter the new instartcor name")
            axios.put("http://localhost:3001/mangeCourses/EditInstName", { newInstName: newInstName, id: id }).then((response) => {
                setInstUpdate(response.data)
                refreshPage();
            })
        }
    }

    const deleteCourse = (id) => {
        axios.delete("http://localhost:3001/mangeCourses/DeleteCourse", { data: { id: id } }).then((response) => {
            setDeletedCourse(response.data)
            refreshPage();
        })
    }

    const view = () => {
        var div = document.getElementById('assign').style.visibility = 'visible';
        console.log(div)
    }
    const hide = (id) => {
        var div = document.getElementById('assign').style.visibility = 'hidden';
        console.log(div)
        return id;

    }

    const OnSunmit = (data) => {
        axios.post("http://localhost:3001/mangeCourses/AssignInstructor", data).then((response) => {
            setAssignMessage(response.data);
            refreshPage();
        })


        console.log(data);
    };
    const ValidationSchema = Yup.object().shape({
        name: Yup.string().max(15).required(),

    });

    const deleteInstructor = (id) => {
        axios.delete("http://localhost:3001/mangeCourses/DeleteAssignedinstr", { data: { id: id } }).then((response) => {
            setDeletedCourse(response.data)
            refreshPage();
        })
        console.log("assigned deleted")
    }
    return (

        <div className='managecourse'>
            <table className='ma-table'>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Instrctor name</th>
                        <th>Actioon</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        data.map((d, i) => {

                            const IntializeValues = {
                                name: "",
                                id: d.C_id

                            };

                            return (
                                <tr key={i}>
                                    <td>{d.C_id}</td>
                                    <td>   <div className='name' onClick={() => { edit('name', d.C_id) }} >{d.C_name}</div></td>
                                    <td>  <div className='code' onClick={() => { edit('code', d.C_id) }} >{d.code}</div></td>
                                    <td>
                                        {
                                            d.status === 1 ? <div className='status' onClick={() => { edit('status', d.C_id) }} ><td>Active</td></div>
                                                :
                                                <div className='status' onClick={() => { edit('status', d.C_id) }}><td>in Active</td></div>
                                        }
                                    </td>


                                    <td>
                                        {
                                            d.instrctor_id === null ? <div>
                                                <p style={{ color: 'white', float: 'left' }}> No instrctor for this course</p>

                                                <div id='assign'>
                                                    <Formik initialValues={IntializeValues} onSubmit={OnSunmit} validationSchema={ValidationSchema}>
                                                        <Form>
                                                            <ErrorMessage name='name' component="span" />
                                                            <Field
                                                                id="CourseStatus"
                                                                name="name"
                                                                placeholder="Assign instructor"

                                                            />
                                                            <button style={{ width: 150 }} type="submit">Assign </button>
                                                        </Form>
                                                    </Formik>
                                                </div>


                                            </div>
                                                :
                                                <div>
                                                    <div style={{ float: 'left' }} className='inst_name' onClick={() => { edit('inst_name', d.C_id) }} ><h3> {d.name}  </h3>
                                                    </div>
                                                    <button onClick={() => { deleteInstructor(d.C_id) }}>Delete instrctor</button>
                                                </div>

                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            deleteCourse(d.C_id)
                                        }} className='ma-delete'>delete</button>
                                    </td>
                                </tr>)
                        })

                    }

                </tbody>
            </table>
        </div>
    );

};

export default ManageCourse;