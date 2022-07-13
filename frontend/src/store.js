import {createStore,combineReducers,applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from'redux-thunk'
import { userLoginReducer } from './reducers/auth-reducer'
import { deletedUserReducer, updateUserReducer, userReducer, userRegisterReducer } from './reducers/employee-reducer'
import { requestReducer,getRequestReducer } from './reducers/request-reducer'
 

const rootReducers=combineReducers({
   user:userLoginReducer,
   request:requestReducer,
   getRequest:getRequestReducer,
   register:userRegisterReducer,
   allUser:userReducer,
   updateUser:updateUserReducer,
   deleteUser:deletedUserReducer
})
const userInfoFromLocalStorage=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):undefined

const initial={
    user:{
        userInfo:userInfoFromLocalStorage
    }
}
const store=createStore(rootReducers,  initial, composeWithDevTools(applyMiddleware(thunk)))

export default store