import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch) =>
  dispatch({
    type: AUTH_START,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTH_SUCCESS,
    id: idToken,
    token: localId,
  });

export const fail = (dispatch, error) =>
  dispatch({
    type: AUTH_FAIL,
    error,
  });
const key = "AIzaSyBHe05t_0ehrMHZGdxRyTAPO0j_bOAI25c";
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
const signInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  key;
export const auth = (dispatch, method, email, password) =>
  axios
    .post(method === "signin" ? signInUrl : signUpUrl, { email, password })
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
