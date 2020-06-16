import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push(response.data[i]);
      }
      return data;
    })
    .then((response) => {
      dispatch({
        type: types.GET_POSTS,
        payload: response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
