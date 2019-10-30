import * as types from "../constants/ActionTypes";

const initialState = {
  type: "",
  value: ""
};

export const selection = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_AUTHOR:
      return {
        ...state,
        type: "AUTHOR",
        value: action.payload.value
      };
    default:
      return state;
  }
};
