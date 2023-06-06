import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/ManageInstructor.css'

const ManageInstructor = () => {
    const navigate = useNavigate
    const [backres , setBackres] = useState([{}]);
    const [nameUpdate , setNameUpdate] = useState("");
    const [PhoneUpdate , setPhoneUpdate] = useState("");
    const [statusUpdate , setStatusUpdate] = useState("");
    const [DeletedInstructor , setDeletedInstrctor] = useState("");
    function refreshPage() {
      window.location.reload(false);
    }
    useEffect(()=>{
      axios.get("http://localhost:3001/mangeInstrctor/").then((response)=>{
        setBackres(response.data);
    })
   
    },[])
    const edit =(option , id)=>{
      if(option=== 'name'){
        let newName = prompt("Enter the ne name ")
        axios.put("http://localhost:3001/mangeInstrctor/EditName",{newName : newName , id : id}).then((response)=>{
          setNameUpdate(response.data)
          refreshPage();
        })
      }else if(option === 'phone'){
        let newPhone = prompt("Enter the bew phone number");
        axios.put("http://localhost:3001/mangeInstrctor/EditPhone",{newPhone : newPhone , id : id}).then((response)=>{
          setPhoneUpdate(response.data)
          refreshPage();
        })
      }else {
        let newstatus = prompt("Change the status ");
        axios.put("http://localhost:3001/mangeInstrctor/EditStatus",{newStatus : newstatus , id : id}).then((response)=>{
          setStatusUpdate(response.data)
          refreshPage();
        })
      }
    }
   const deleteInstructor =(id)=>{
     axios.delete("http://localhost:3001/mangeInstrctor/DeleteInstructor" ,{data :{id : id}}).then((response)=>{
      setDeletedInstrctor(response.data)
      refreshPage();
     })
   }
   
    
    return (
        <div className='instructor  '>
            <table className='instructor-table'>
                <tbody>
                    <tr>
                     
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                    </tr>
                </tbody>
                <tbody>
                    {
                        backres.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                               
                                <td><div className='name' onClick={()=>{edit('name' , d.id)}} >{d.name}</div> </td>  
                                <td>{d.email}</td>
                                <td><div className='phone' onClick={()=>{edit('phone' , d.id)}} >{d.phone}</div> </td>
                                <td><div className='phone' onClick={()=>{edit('status' , d.id)}} >{d.status}</div> </td>
                                <td>
                                <button  onClick={()=>{  deleteInstructor(d.id) } }className='instructor-delete'>delete</button>
                                </td>    
                            </tr>
                        ))
                    
                    }
                </tbody>
            </table>
        </div>
    );
   
};

export default ManageInstructor;