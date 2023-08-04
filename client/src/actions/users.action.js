import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user`)
      .then((ress) => {
        dispatch({ type: GET_USERS, payload: ress.data });
      })
      .catch((err) => console.log(err));
  };
};
