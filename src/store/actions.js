import {
  GET_BUSINESSES_REQUEST,
  GET_BUSINESSES_SUCCESS,
  GET_BUSINESSES_FAILURE
} from "./types";

import { baseURL, token } from "../utils";

export const getBusinesses = (term, latitude = '37.786882', longitude='-122.399972') => dispatch => {
  dispatch({
    type: GET_BUSINESSES_REQUEST
  });

  const url = `https://cors-anywhere.herokuapp.com/${ baseURL }search?term=${ term }&latitude=${ latitude }&longitude=${ longitude }`;

  fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: GET_BUSINESSES_SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      if (error) {
        dispatch({
          type: GET_BUSINESSES_FAILURE,
          payload: error
        });
      }
    });
};
