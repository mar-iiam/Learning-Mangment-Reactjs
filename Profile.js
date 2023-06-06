import React from 'react';
import '../style/Profile.css';
import profile from '../assets/images/30203162105313.jpg';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { setAuthUser ,getAuthUser} from '../helpers/stoarge'
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useSearchParams } from "react-router-dom";
const Profile = () => {
    const [searchPrams] = useSearchParams();
    const [data, setData] = useState({});
    const [info, setInfo] = useState({});
    const auth = getAuthUser()
    useEffect(() => {
        const id = auth.id;
        console.log(id)
        axios.get("http://localhost:3001/admin/profile/:", { params: { id: id } }).then((response) => {
            setData(response.data)
            console.log(response.data.email)
        })
        
    }, [])
     

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
                    <div className='profile1-button'>
                        <Link to={'/addstudent'}><button className='profile2'>Add New Student</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;