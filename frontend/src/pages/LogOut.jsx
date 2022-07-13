import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {  userLogoutAction } from '../actions/auth-action'

export default function LogOut({history}) {
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.user)
  const [count ,setCount]=useState(5)
  useEffect(() => {
      if (userInfo) {
          dispatch( userLogoutAction()) 
          setTimeout(() => {
              clearInterval(rem)
              history.push("/login")
          }, 5000)
         const rem= setInterval(() => {
             setCount(pre=> pre-1)
         }, 1000)  
      } else {
         history.push("/login")
      }
  },[])
  return (
    <div className='container-fluid vh-100 mt-5'>
       <div className='row'>
               <div className='col-sm-6 offset-sm-3 mt-5'>
                     <div className="card">
                     <div className='card-body bg-dark text-warning'>
                        <h5>You have Logout Successully</h5>
                        <h5>You will be Redirted after  {count} Sec on login page </h5>
                        </div>
                     </div>
               </div>

           </div>
    </div>
  )
}
