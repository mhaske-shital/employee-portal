
import { GET_REQUEST, GET_REQUEST_FAIL, GET_REQUEST_SUCCESS, USER_REQUEST, USER_REQUEST_FAIL, USER_REQUEST_SUCCESS } from '../constants/Request-constants';

export const requestReducer=(state={},{type,payload})=>{

    switch ( type) {
        case USER_REQUEST:return({isLoading:true}) ;
        case USER_REQUEST_SUCCESS:return({isLoading:false,requestInfo:payload}) ;
        case USER_REQUEST_FAIL:return({isLoading:false,requestInfoError:payload}) ;
       
        default: return state
    }

}


export const getRequestReducer=(state={allRequest:[]},{type,payload})=>{

    switch ( type) {
        case GET_REQUEST:return({allRequest:{},isLoading:true}) ;
        case GET_REQUEST_SUCCESS:return({isLoading:false,allRequest:payload}) ;
        case GET_REQUEST_FAIL:return({isLoading:false,allRequestError:payload}) ;
       
        default: return state;
    }

}