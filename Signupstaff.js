import React from 'react';
import '../style/Signupstaff.css';
import profile from '../assets/images/profile.jpeg';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import name from '../assets/images/name-id-icon.webp';
import phone from '../assets/images/phone-number.png';
import status from '../assets/images/status.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { setAuthUser } from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, createSearchParams } from "react-router-dom";
const Signup = () => {
    const [data, setData] = useState("");
    const [mesaage, setMesaage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
  
      fetch('http://localhost:3001/admin/signup')
        .then(response => response.text())
        .then(data => {
          setData(data)
          console.log("here is my data " + data)
        })
        .catch(err => console.log(err))
    }, []);
  
    const IntializeValues = {
      name: "",
      email: "",
      password: "",
      phone: "",
      secret: ""
  
    };
    const OnSunmit = (data) => {
  
      axios.post('http://localhost:3001/admin/signup', data).then((response) => {
        setMesaage(response.data)
        if (response.data.error) {
          setMesaage(response.data.error);
        } else {
         
          navigate({pathname : "/staffonly"
        });
        };
      })
     
  
      console.log(data);
    };
    const ValidationSchema = Yup.object().shape({
      name: Yup.string().max(15).required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(10).required(),
      phone: Yup.string().max(15).required(),
      secret: Yup.number().required()
    });
  
    return (
        <div className='signupstaff'>
            <div className='sub-signupstaff'>
                <div>
                    <div className='imgs-signupstaff'>
                        <div className='container-imgs-signupstaff'>
                            <img src={profile} alt='profile' className='profile' />
                        </div>
                    </div>
                    <div>
                        <Formik initialValues={IntializeValues} onSubmit={OnSunmit} validationSchema={ValidationSchema}>
                            <Form>
           
                                <h1> Staff Sign up</h1>
                                {
                                mesaage.length===0 ?   <div></div>  : <div  className='alert alert-danger fix' >{mesaage}</div>
                             }
                            
                                <ErrorMessage className='alert alert-danger fix' name='name' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='email' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='secret' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='phone' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='password' component="span" />
                                <hr></hr>
                               
                                <div>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="name"
                                        placeholder="Your name "
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="secret"
                                        placeholder="Your Secret Key"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={phone} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="phone"
                                        placeholder="Your Phone number"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={email} alt='email' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={pass} alt='pass' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="password"
                                        placeholder="Your password "
                                    />
                                </div>
                                <div className='signupstaff-button'>
                                    <button type='submit'>Sign Up</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;