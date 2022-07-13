import {
  GET_REQUEST,
  GET_REQUEST_FAIL,
  GET_REQUEST_SUCCESS,
  USER_REQUEST,
  USER_REQUEST_FAIL,
  USER_REQUEST_SUCCESS,
} from "../constants/Request-constants";
import axios from "axios";
export const requestAction = (FormData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_REQUEST });
    const config = {
      headers: {
        Authorization: getState().user.userInfo.token,
      },
    };
    const { data } = await axios.post("/add-request", FormData, config);
    console.log(data);
    dispatch({ type: USER_REQUEST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: USER_REQUEST_FAIL, payload: error });
  }
};

export const getRequestAction = () => async (dispatch,getState) => {
  try {
    dispatch({ type: GET_REQUEST });
    const config = {
      headers: {
        Authorization: getState().user.userInfo.token,
      },
    };
    const { data } = await axios.get("/get-request",config);
    console.log("data here-->", data);
    dispatch({ type: GET_REQUEST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_REQUEST_FAIL, payload: error });
  }
};
