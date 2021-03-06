import * as types from "../constants/ActionTypes";

const initialState = {
  type: "",
  value: "",
  authorNetwork: {},
  authorNetworkLoading: false,
  topicTrends: [],
  topicTrendsLoading: false
};

export const selection = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_AUTHOR:
      return {
        ...state,
        type: "AUTHOR",
        value: action.payload.value
      };
    case types.SELECT_PAPER:
      return {
        ...state,
        type: "PAPER",
        value: action.payload.value
      };
    case types.SELECT_TOPIC:
      return {
        ...state,
        type: "TOPIC",
        value: action.payload.value
      };
    case types.GET_AUTHOR_NETWORK:
      return {
        ...state,
        authorNetwork: action.payload.value,
        authorNetworkLoading: action.payload.loading
      };
    case types.GET_TOPIC_TRENDS:
      return {
        ...state,
        topicTrends: action.payload.data,
        topicTrendsLoading: action.payload.loading
      };
    case types.RESET_SELECTION:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
