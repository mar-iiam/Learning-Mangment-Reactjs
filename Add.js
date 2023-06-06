import axios from "axios";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

 function Add(){
    const [inputData, setInputData]=useState({name:'',email:''})
    const navigat =useNavigate();
    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:3031/users' ,inputData)
        .then(res =>{
            alert("data assed successfully");
            navigat('/')
        }).catch(err=>console.log(err));
    }
    return(
        <div className="d-flex">
            <div className="w-50">
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name</label>
                    <input type="text"name="name" className="form-control"
                    onChange={e=>setInputData({...inputData,name:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email"> Email</label>
                    <input type="Email"name="email" className="form-control"
                    onChange={e=>setInputData({...inputData,email:e.target.value})}/>
                </div><br />
                <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>

    )
 }

 export default Add