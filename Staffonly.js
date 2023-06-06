import React from 'react';
import '../style/Staffonly.css';
import profile from '../assets/images/profile.jpeg';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, createSearchParams } from "react-router-dom";
import axios from 'axios';
import { setAuthUser } from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
const Staffonly = () => {
    const [data, setData] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/admin/AdminLogin')
            .then(response => response.text())
            .then(data => {
                setData(data)
                console.log("here is my data " + data)
            })
            .catch(err => console.log(err))
    }, [])

    const IntializeValues = {
        email: "",
        password: ""
    };

    const OnSunmit = (data) => {

        axios.post("http://localhost:3001/admin/AdminLogin", data).then((response) => {

            console.log('in axios.post')
            console.log(response.data);
            if (response.data.error) {
                setStatus(response.data.error);
            } else {

                setAuthUser(response.data)
                navigate({
                    pathname: "/profile",
                   
                });
            };

        });

    };

    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).max(10).required()
    });
    return (
        <div className='Staffonly'>
            <div className='sub-Staffonly'>
                <div>
                    <div className='imgs-Staffonly'>
                        <div className='container-imgs-Staffonly'>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>
                    <div>
                     
                        
                        <Formik initialValues={IntializeValues} onSubmit={OnSunmit} validationSchema={ValidationSchema}>
                            
                            <Form>
                            <ErrorMessage className='alert alert-danger fix' name='email' component="div" />
                             <ErrorMessage className='alert alert-danger fix' name='password' component="div" />
                             {
                                status.length===0 ?   <div></div>  : <div  className='alert alert-danger fix' >{status}</div>
                             }
                            
                            <h1>Staff Login </h1>
                                <div>
                                    <img src={email} alt='email' className='email'/>
                                   
                                   
                                    <Field className="feild"
                                        id="AdminPassword"
                                        name="email"
                                       
                                    />
                                </div>
                                <div className='second-input'>
                                    <img src={pass} alt='pass' className='email' />
                                   
                                    <Field  className="feild"
                                        id="AdminPassword"
                                        name="password"
                                       
                                    />
                                </div>
                                <div className='Staffonly-button'>
                                    <button type='submit'>Login</button>
                                </div>
                            </Form>
                        </Formik>

                        <p className='link-Staffonly'>
                            Create new account  <a href='/signupstaffonly'> Sign up</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Staffonly;