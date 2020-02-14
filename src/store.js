import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  image_url: "",
  mortgage: "",
  rent: ""
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_RENT = "UPDATE_RENT";
export const CANCEL_ALL = "CANCEL_ALL";

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CANCEL_ALL:
      return {
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        image_url: "",
        mortgage: "",
        rent: ""
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: payload
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: payload
      };
    case UPDATE_CITY:
      return {
        ...state,
        city: payload
      };
    case UPDATE_STATE:
      return {
        ...state,
        state: payload
      };
    case UPDATE_ZIPCODE:
      return {
        ...state,
        zipcode: payload
      };
    case UPDATE_IMAGEURL:
      return {
        ...state,
        image_url: payload
      };
    case UPDATE_MORTGAGE:
      return {
        ...state,
        mortgage: payload
      };
    case UPDATE_RENT:
      return {
        ...state,
        rent: payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
