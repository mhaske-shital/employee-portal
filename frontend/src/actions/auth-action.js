import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/auth-constant";

export const userLoginAction = (login) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post("auth-login", login);
    // console.log(data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { employeeInfo: data.result, token: data.token },
    });
    const x = getState().user.userInfo;
    localStorage.setItem("user", JSON.stringify(x));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("user");
};
