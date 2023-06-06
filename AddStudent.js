import React from 'react';
import '../style/AddStudent.css';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import phone from '../assets/images/phone-number.png';
import status from '../assets/images/status.png';
import name from '../assets/images/name-id-icon.webp';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { setAuthUser } from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
const AddStudent = () => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [status, setStatus] = useState("");
    const IntializeValues = {
        name: "",
        email :"",
        password : "",
        phone  :"",
        status :"",
    
    };
    
    const OnSunmit =(data)=>{
           
      axios.post('http://localhost:3001/users/AddStudent' ,data).then((response)=>{
        console.log(response.data);
        setStatus( response.data )
      })
    
      
      console.log(data);
    };
    
    const ValidationSchema =Yup.object().shape({  
      name : Yup.string().max(15).required() , 
      email : Yup.string().email().required(),
      password : Yup.string().min(6).max(10).required(),
      phone : Yup.string().max(15).required(),
      status : Yup.string().required(),
    });
    
    return (
        <div className='student'>
            <div className='sub-student'>
                <div>
                    <div className='sub-student-2'>
                        <p>Student</p>
                    </div>
                    <div>
                        <Formik  initialValues={IntializeValues} onSubmit={OnSunmit} validationSchema={ValidationSchema}>
                            <Form>
                               <div style={{float : 'right'}}> 
                               {
                                status.length===0 ?   <div></div>  : <div  className='alert alert-danger fix' >{status}</div>
                             }
                            
                               <ErrorMessage className='alert alert-danger fix' name='name' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='email' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='status' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='phone' component="span" />
                                <hr></hr>
                                <ErrorMessage className='alert alert-danger fix' name='password' component="span" />
                                <hr></hr>
                               </div>

                                <div>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="name"
                                        placeholder="Student name "
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="status"
                                        placeholder="Student status"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={phone} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="phone"
                                        placeholder="Student Phone number"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={email} alt='email' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="email"
                                        placeholder="Student Email"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={pass} alt='pass' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="password"
                                        placeholder="Student password "
                                    />
                                </div>
                                <div className='add-button'>
                                  <button type='submit' className='add-student'>Add</button>
                                </div>
                            </Form>
                        </Formik>
                        <button onClick={()=>{navigate('/AllStudents')}} className='students'>See All students</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AddStudent;