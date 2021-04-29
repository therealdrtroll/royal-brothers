import axios from "axios";
import * as actionTypes from "./ActionTypes";

//rentals

const rentalsRequest = () => {
  return {
    type: actionTypes.RENTALS_REQUEST,
  };
};

const rentalsSuccess = () => {
  return {
    type: actionTypes.RENTALS_SUCCESS,
  };
};

const rentalsFailure = () => {
  return {
    type: actionTypes.RENTALS_FAILURE,
  };
};

export const rentalsHandler = (payload) => (dispatch) => {
  dispatch(rentalsRequest());
  return axios
    .post(`${process.env.REACT_APP_BASE}/rentals`, payload)
    .then((res) => dispatch(rentalsSuccess()))
    .then((err) => dispatch(rentalsFailure()));
};

// monthly subscription
const monthlyRequest = () => {
  return {
    type: actionTypes.MONTHLY_REQUEST,
  };
};

const monthlySuccess = () => {
  return {
    type: actionTypes.MONTHLY_SUCCESS,
  };
};

const monthlyFailure = () => {
  return {
    type: actionTypes.MONTHLY_FAILURE,
  };
};

export const monthlyHandler = (payload) => (dispatch) => {
  dispatch(monthlyRequest());
  return axios
    .post(`${process.env.REACT_APP_BASE}/months`, payload)
    .then((res) => dispatch(monthlySuccess()))
    .then((err) => dispatch(monthlyFailure()));
};
