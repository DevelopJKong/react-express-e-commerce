import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const baseUrl = "http://localhost:5050/api";
    const data = await (
      await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
    ).json();
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
