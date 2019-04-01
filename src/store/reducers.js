import {
    GET_BUSINESSES_REQUEST,
    GET_BUSINESSES_SUCCESS,
    GET_BUSINESSES_FAILURE
  } from "./types";

  const initialState = {
    businesses: [],
    error: false,
    errorMessage: '',
    isLoading: false
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BUSINESSES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            }

        case GET_BUSINESSES_SUCCESS:
        const {
            businesses
        } = action.payload;

        return {
            ...state,
            businesses: [ ...businesses ],
            error: false,
            isLoading: false,
        }

        case GET_BUSINESSES_FAILURE:
        return {
            ...state,
            error: true,
            errorMessage: action.payload,
            isLoading: false
        }

        default:
        return state;
    }
  }
