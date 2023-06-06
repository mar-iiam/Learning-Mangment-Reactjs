import React from 'react';
import '../style/Signup.css';
import profile from '../assets/images/profile.jpeg';
import email from '../assets/images/email1.png';
import pass from '../assets/images/password-76.png';
import name from '../assets/images/name-id-icon.webp';

const Signup = () => {
    return (
        <div className='signup'>
            <div className='sub-signup'>
                <div>
                    <div className='imgs-signup'>
                        <div className='container-imgs-signup'>
                            <img src={profile} alt='profile' className='profile'/>
                        </div>
                    </div>
                    <div>
                        <h1>Sign up </h1>
                        <div>
                            <img src={name} alt='name' className='email' />
                            <input type='text' placeholder='first name' className='name' />
                        </div>
                        <div className='input-signup'>
                            <img src={name} alt='name' className='email' />
                            <input type='text' placeholder='second name' className='name' />
                        </div>
                        <div className='input-signup'>
                            <img src={email} alt='email' className='email' />
                            <input type='email' placeholder='your email' className='name' />
                        </div>
                        <div className='input-signup'> 
                            <img src={pass} alt='pass' className='email' />
                            <input type='password' placeholder='password' className='name' />
                        </div>
                        <div className='signup-button'>
                        <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Signup;