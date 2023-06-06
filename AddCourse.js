import React from 'react';
import '../style/AddCourse.css';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import code from '../assets/images/code.jpg';
import status2 from '../assets/images/status.png';
import name from '../assets/images/name-id-icon.webp';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { setAuthUser } from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
const AddCourse = () => {
    const [data, setData] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3001/mangeCourses/AddCourse").then((response) => {
            setData(response.data)
        })
    })
    const IntializeValues = {
        name: "",
        code: "",
        status: ""
    };

    const OnSunmit = (data) => {

        axios.post("http://localhost:3001/mangeCourses/AddCourse", data).then((response) => {
            console.log(response.data);
            setStatus(response.data )
        })


        console.log(data);
    };
    const ValidationSchema = Yup.object().shape({
        name: Yup.string().max(15).required(),
        code: Yup.string().required(),
        status: Yup.string().required(),

    });
    return (
        <div className='course'>
            <div className='sub-course'>
                <div>
                    <div className='sub-course-2'>
                        <p>course</p>  {status.msg}
                    </div>
                    <Formik initialValues={IntializeValues} onSubmit={OnSunmit} validationSchema={ValidationSchema}>
                        <Form>
                        <div style={{float : 'right'}}> 
                               {
                                status.length===0 ?   <div></div>  : <div  className='alert alert-danger fix' >{status}</div>
                             }
                            
                               <ErrorMessage className='alert alert-danger fix' name='name' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='code' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='status' component="span" />
                                <hr></hr>
                               </div>
                            <div className='course-add-input'>
                                <p>Course name:</p>
                                <img src={name} alt='name' className='email' />
                                <Field className="feild"
                                    id="courname"
                                    name="name"
                                    placeholder="Please enter your name  "
                                />
                            </div>
                            <div className='course-add-input'>
                                <p>Course ID:</p>
                                <img src={code} alt='name' className='email' />
                                <Field className="feild"
                                    id="courEmail"
                                    name="code"
                                    placeholder="Please enter your email "
                                />
                            </div>
                            <div>
                                <p>Course Status:</p>
                                <img src={status2} alt='name' className='email' />
                                <Field className="feild"
                                    id="CourseStatus"
                                    name="status"
                                    placeholder="Please enter your password "

                                />
                            </div>
                            <div className='course-add-button'>
                                <button type='submit' className='add-course'>Add</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>

    );
};

export default AddCourse;