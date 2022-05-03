import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
const baseUrl = "http://localhost:5050/api";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
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

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const data = await (
      await fetch(`${baseUrl}/products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    ).json();

    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser?.accessToken;
  dispatch(deleteProductStart());
  try {
    const data = await (
      await fetch(`${baseUrl}/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${TOKEN}`,
        },
      })
    ).json();

    dispatch(deleteProductSuccess(data));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, user, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, user }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser?.accessToken;
  dispatch(addProductStart());
  try {
    const data = await (
      await fetch(`${baseUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(product)
      })
    ).json();

    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
