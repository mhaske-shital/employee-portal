import {
    ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS
} from '../constants/employee-constant'

export const userRegisterReducer=(state={userRegister:{}},{type,payload})=>{
    switch (type) {
        case USER_REGISTER_REQUEST:return {isLoading:true};
        case USER_REGISTER_SUCCESS:return {isLoading:false,userRegister:payload};
        case USER_REGISTER_FAIL:return {isLoading:false,userRegisterError:payload};
    
        default:return state;
    }
}
export const userReducer=(state={allEmployee:[]},{type,payload})=>{
    switch (type) {
        case ALL_USER_REQUEST:return {isLoading:true};
        case ALL_USER_SUCCESS:return {isLoading:false,allEmployee:payload};
        case ALL_USER_FAIL:return {isLoading:false,allUserError:payload};
    
        default:return state;
    }
}

export const updateUserReducer=(state = {updateUser:{}},{type,payload})=>{
    switch (type) {
        case UPDATE_USER_REQUEST:
            return{updateUser:{},isLoading:true};
        case UPDATE_USER_SUCCESS:
            return{updateUser:{},isLoading:false};
        case UPDATE_USER_SUCCESS:
            return{updaterUserError:payload,isLoading:false};    
        default:return state;
    }
}
export const deletedUserReducer=(state = {deleteUser:{}},{type,payload})=>{
    switch (type) {
        case DELETE_USER_REQUEST:
            return{deleteUser:{},isLoading:true};
        case DELETE_USER_SUCCESS:
            return{deleteUser:{},isLoading:false};
        case DELETE_USER_FAIL:
            return{deleteUserError:payload,isLoading:false};    
        default:return state;
    }
}