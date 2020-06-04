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

export const auth = (dispatch, email, password) =>
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHe05t_0ehrMHZGdxRyTAPO0j_bOAI25c",
      { email, password }
    )
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
