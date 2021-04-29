import * as actions from "./actionTypes";
import axios from "axios";

const getBikeReq = () => {
  return {
    type: actions.GET_BIKE_REQUEST,
  };
};

const getBikeSucc = (payload) => {
  return {
    type: actions.GET_BIKE_SUCCESS,
    payload,
  };
};

const getBikeFail = () => {
  return {
    type: actions.GET_BIKE_FAILURE,
  };
};

const getBike = (_id) => (dispatch) => {
  dispatch(getBikeReq());
  return axios
    .get(`https://royal-backend.herokuapp.com/bikes/${_id}`)
    .then((res) => dispatch(getBikeSucc(res.data.data)))
    .catch((err) => dispatch(getBikeFail));
};

export default getBike;
