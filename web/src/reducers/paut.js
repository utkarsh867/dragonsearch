import * as types from "../constants/ActionTypes";

const initialState = {
  papers: [],
  authors: [],
  topics: [],
  exploreMode: true
};

export const paut = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_AUTHOR_TO_LIKE:
      return {
        ...state,
        authors: [...state.authors, action.payload.author]
      };
    case types.ADD_PAPER_TO_LIKE:
      return {
        ...state,
        papers: [...state.papers, action.payload.paper]
      };
    case types.ADD_TOPIC_TO_LIKE:
      return {
        ...state,
        topics: [...state.topics, action.payload.topic]
      };
    case types.TOGGLE_EXPLORE_MODE:
      return {
        ...state,
        exploreMode: !state.exploreMode
      };
    case types.RESET_BASKET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
