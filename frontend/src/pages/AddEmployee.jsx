import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux'
import { userRegisterAction } from '../actions/employee-action';

export default function AddEmployee() {
    
        const [user, setuser] = useState({
            email:"",
            name:"",
            password:"",
            joiningDate:"",
            empcode:"",

        });
        const dispatch=useDispatch()
        const onSubmitUserData=(e)=>{
            e.preventDefault()
            console.log(user);
            dispatch(userRegisterAction(user))
            alert("employee added successfully")
            e.target.reset()
        }
  return (
    <div className='container-fuild vh-100 alert alert-danger mt-5'> 
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
              <div className="card mt-3">
                  <div className="card-header bg-warning text-dark font-bold text-center">Add Employee</div>
                  <div className="card-body bg-dark">
                      <form onSubmit={onSubmitUserData}>
                          <input type="text"  onChange={e=> setuser({...user,name:e.target.value})} placeholder='Enter Name' minLength={1} maxLength={20} required className="form-control" /><br />
                          <input type="email"   onChange={e=> setuser({...user,email:e.target.value})} placeholder='Enter Email' minLength={1} maxLength={20} required className="form-control" /><br />
                          <input type="password" pattern=".{6,}" title="Six"  onChange={e=>setuser({...user,password:e.target.value})}   placeholder='Enter Password' required className="form-control" /><br />
                          <input type="date"  onChange={e=>setuser({...user,joiningDate:e.target.value})} placeholder='Enter Date' max="2022-07-05"  required className="form-control" /><br />
                          <input type="number"  onChange={e=>setuser({...user,empcode:e.target.value})} placeholder='Enter Employee Code'minLength={1} maxLength={2} required className="form-control" /><br />
                          <button className="btn btn-danger text-warning w-100">Add Employee</button><br /><br />
                        </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
