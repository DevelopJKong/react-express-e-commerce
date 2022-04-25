import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    // const res = await publicRequest.post("/auth/login", user);
    const baseUrl = "http://localhost:5050/api";
    const data = await (
      await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
        }),
      })
      ).json();
      console.log(data);
    dispatch(loginSuccess(data));
  } catch (error) {
      console.log(error);
    dispatch(loginFailure());
  }
};
