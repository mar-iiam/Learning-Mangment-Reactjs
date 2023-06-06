import React from 'react';
import '../style/Addinstructor.css';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import name from '../assets/images/name-id-icon.webp';
import phone from '../assets/images/phone-number.png';

import { Link ,useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import axios from 'axios';

const Addinstructor = () => {
    const navigate = useNavigate();
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/mangeInstrctor/AddInstructor')
    .then(response => response.text())
    .then(data => {setData(data)
      console.log("here is my data " + data)
    })
    .catch(err => console.log(err))
  }, [])

  const IntializeValues = {
    name: "",
    email :"",
    password : "",
    phone  :"",
    status :"",
};

const OnSunmit =(data)=>{
       
  axios.post('http://localhost:3001/mangeInstrctor/AddInstructor' ,data).then((response)=>{
    console.log(response.data);
    setStatus(response.data )
  })

  
  console.log("hey"+data);
};

const ValidationSchema =Yup.object().shape({  
  name : Yup.string().max(15).required() , 
  email : Yup.string().email().required(),
  password : Yup.string().min(6).max(10).required(),
  phone : Yup.string().max(15).required(),
  status : Yup.string().required(),
 
});


    return (
        <div className='instructor'>
        <div className='sub-instructor'>
            <div>
                <div className='sub-instructor-2'>
                <p>Instructor</p>
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
                                <div style={{float : 'left'}}>
                                <div>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="name"
                                        placeholder="Instrctor name "
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={name} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="status"
                                        placeholder="Instrctor status"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={phone} alt='name' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="phone"
                                        placeholder="Instrctor Phone number"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={email} alt='email' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="email"
                                        placeholder="Instrctor Email"
                                    />
                                </div>
                                <div className='input-signupstaff'>
                                    <img src={pass} alt='pass' className='email' />
                                    <Field className="feild"
                                        id="InstPassword"
                                        name="password"
                                        placeholder="Instrctor password "
                                    />
                                </div>
                                <button onClick={()=>{navigate('/manageinstructor')}} style=
                        {{marginTop :50}}className='students'>See All Instrctors</button>
                                </div>
                                <div style={{float : 'left'  }}className='add-button'>
                                 <button className='add-student' type='submit'>add</button>
                                </div>
                            </Form>
                        </Formik>
                       
               </div>
            </div>
        </div>
        </div>
    );
};

export default Addinstructor;