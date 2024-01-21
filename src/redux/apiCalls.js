import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    await publicRequest.post("/auth/register", user);
    const {username , password} = user
    console.log(user,username,password)
    const res = await publicRequest.post("/auth/login", {username,password});
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

