import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update()  {
    const {id}=useParams();
    const [data,setData]=useState([])
    const navigat= useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3050/users3/'+id)
        .then(res =>setData(res.data))
        .catch(err =>console.log(err))
    }, [])
    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:3050/users3/'+id,data)
        .then(res =>{
            alert("data update successfully");
            navigat('/')
        })
    }
    return (
        <div className="d-flex">
            <div className="w-50">
                <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> ID</label>
                    <input type="text" disabled name="name" value={data.id} className="form-control"/>
                </div>
                <div>
                    <label htmlFor="name"> Name</label>
                    <input type="text"name="name" value={data.Name} className="form-control"
                    onChange={e=> setData({...data, Name:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email"> Email</label>
                    <input type="Email"name="email" value={data.Email} className="form-control"
                    onChange={e=> setData({...data,Email:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name"> Phone</label>
                    <input type="text"name="name" value={data.Phone} className="form-control"
                    onChange={e => setData({...data, Phone:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="name"> Grade</label>
                    <input type="text"name="name" value={data.grade} className="form-control"
                    onChange={e => setData({...data, grade:e.target.value})}/>
                </div><br />
                <button className="btn btn-info">update</button>
                </form>
            </div>
        </div>

    )
}

export default Update;