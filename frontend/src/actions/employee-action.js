import {
    ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS
} from '../constants/employee-constant'
import axios from 'axios'

export const userRegisterAction=(userRegisterCredential)=>async(dispatch,getState)=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})
        const config = {
            headers: {
              Authorization: getState().user.userInfo.token,
            },
          };
        const {data}=await axios.post("/add-employee",userRegisterCredential,config)
        dispatch({type:USER_REGISTER_SUCCESS,payload:data.result})
        
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,payload:error})
    }
}
export const allUserAction=()=>async(dispatch,getState)=>{
    try {
        dispatch({type:ALL_USER_REQUEST})
        const config = {
            headers: {
              Authorization: getState().user.userInfo.token,
            },
          };
        const {data}=await axios.get("/get-employee",config)
        dispatch({type:ALL_USER_SUCCESS,payload:data.data})
        
    } catch (error) {
        dispatch({type:ALL_USER_FAIL,payload:error})
    }
}
export const updateUserAction = (id,formData)=>async(dispatch,getState)=>{
    try {
       dispatch({type:UPDATE_USER_REQUEST})
       const config = {
        headers: {
          Authorization: getState().user.userInfo.token,
        },
      };
       const {data}=await axios.put(`/update-employee/${id}`,formData,config);
       console.warn(data)
       dispatch({type:UPDATE_USER_SUCCESS,payload:data.data})
   } catch (error) {
        dispatch({type:UPDATE_USER_FAIL,payload:error})
        
    }
   

}

export const deleteUserAction = (id)=>async(dispatch,getState)=>{
    try {
       dispatch({type:DELETE_USER_REQUEST})
       const config = {
        headers: {
          Authorization: getState().user.userInfo.token,
        },
      };
       const {data}=await axios.delete(`/delete-employee/${id}`,config);
       dispatch({type:DELETE_USER_SUCCESS,payload:data.data})
   } catch (error) {
        dispatch({type:DELETE_USER_FAIL,payload:error})
        
    }
   
}