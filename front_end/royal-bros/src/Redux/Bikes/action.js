import * as todoActions from "./actionType";
import axios from "axios";

const getBikesRequest = () => {
  return {
    type: todoActions.GET_BIKES_REQUEST,
  };
};
const getBikesSuccess = (payload) => {
  return {
    type: todoActions.GET_BIKES_SUCCESS,
    payload,
  };
};
const getHostsFailure = () => {
  return {
    type: todoActions.GET_BIKES_FAILURE,
  };
};
const getBikes = (id) => (dispatch) => {
  dispatch(getBikesRequest());
  return axios
    .get(`https://royal-backend.herokuapp.com/location/${id}/bikes`)
    .then((res) => dispatch(getBikesSuccess(res.data.data.bikes)))
    .catch((err) => dispatch(getHostsFailure()));
};
export default getBikes;
