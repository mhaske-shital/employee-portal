import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { allUserAction, deleteUserAction, updateUserAction } from '../actions/employee-action'
export default function AllEmployee() {
    const dispatch=useDispatch()
    const {allEmployee}=useSelector(state=>state.allUser)
    const [user, setuser] = useState({
        email:"",
        name:"",
        password:"",
        joiningDate:"",
        empcode:"",

    });
    const[updateId,setupdateId]=useState()
    useEffect(() => {
       dispatch(allUserAction())
    }, [ ])
    const onSubmitUserData=(e)=>{
        e.preventDefault()
        console.log(user);
        dispatch(updateUserAction(updateId,user))
        alert("employee updated successfully")
        // e.target.reset()
        dispatch(allUserAction())
    }
    let deleteId
    const handleGetUpdateData = (id) => {
        setupdateId(id)
        let res = allEmployee.filter(item => item._id == id)
        setuser({
            email:res[0].email,
        name:res[0].name,
        password:res[0].password,
        joiningDate:res[0].joiningDate,
        empcode:res[0].empcode,

        })

        dispatch(allUserAction())
        console.log(user);
      }
    
  return (
    <div> 
        <div className="container-fluid alert alert-danger vh-100 mt-5">
            <div className="col col-sm-8 offset-2 mt-5">
             <div className='table-responsive'>
                    <table className="table table-bordered">
                        <thead className="bg-warning">
                        <tr >
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Employee Code</th>                     
                            <th scope="col">Joinig Date</th>                     
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody className='bg-dark text-light font-weight-bold w-100'>
                        {allEmployee &&
                            allEmployee?.length > 0 &&
                            allEmployee?.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td className="text-capitalize">{item.email}</td>
                                <td className="text-capitalize">{item.name}</td>
                                <td className="text-capitalize">{item.empcode}</td>                       
                                <td className="text-capitalize">{item.joiningDate}</td>                       
                                <td>
                                    <button className='btn btn-outline-danger' data-bs-target="#delete" data-bs-toggle="modal" onClick={(e) => {
                                    deleteId=item._id
                                }}><i class="bi bi-trash-fill"></i></button>
                                <button className='btn btn-outline-warning ms-3' data-bs-target="#update" data-bs-toggle="modal" onClick={(e) => {
                                    handleGetUpdateData(item._id)
                                }}><i class="bi bi-pencil-square"></i></button>

                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
             </div>

            <div className="modal fade" id="update" >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-warning text-dark text-center">
                       Update Employee
                    </div>
                    <div className="modal-body bg-dark">
                    <form onSubmit={onSubmitUserData}>
                          <input type="text" value={user.name}  onChange={e=> setuser({...user,name:e.target.value})} placeholder='Enter Name' required className="form-control" /><br />
                          <input type="email" value={user.email}  onChange={e=> setuser({...user,email:e.target.value})} placeholder='Enter Email' required className="form-control" /><br />
                          <input type="text" value={user.password} pattern=".{6,}" title="Six"  onChange={e=>setuser({...user,password:e.target.value})} placeholder='Enter Password' required className="form-control" /><br />
                          <input type="date" value={user.date} onChange={e=>setuser({...user,joiningDate:e.target.value})} placeholder='Enter Password' required className="form-control" /><br />
                          <input type="number" value={user.empcode} onChange={e=>setuser({...user,empcode:e.target.value})} placeholder='Enter Empoyee Code' required className="form-control" /><br />
                         <div className='btn-group w-100'>
                         <button className='btn btn-info' data-bs-dismiss="modal" onClick={onSubmitUserData} >update</button>
                         <button className='btn btn-outline-warning' type='button' data-bs-dismiss="modal">Cancel</button>
                         </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>


            <div className="modal fade" id="delete" >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-warning">
                    <h5> Are You Sure </h5>
                    </div>
                    <div className="modal-body bg-dark text-light">
                    <p>Are you sure you want to delete this Employee?</p>
                    <div className="btn-group w-100">
                            <div className="btn  btn-success" data-bs-dismiss="modal">No</div>
                            <div className="btn  btn-outline-danger" data-bs-dismiss="modal" onClick={async(e)=>{
                                await dispatch(deleteUserAction(deleteId))
                                await dispatch(allUserAction())
                            }}>Yes</div>
                    </div>
                </div>
             </div>
        </div>
            </div>
            </div>
        </div>
    </div>
  )
}
