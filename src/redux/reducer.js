// import { DECREMENT, INCREMENT } from "./constants";

const initialState = {
  count: 0,
  test: null,
  isFetching: null,
  error: null,
  posts: null
};

export default function rootReducer(state= initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "AUMENTAR":
      return{
        ...state,
        count: state.count +1
      };
    case "REDUCIR":
      return{
        ...state,
        count:state.count - 1
      };
    case "START_GET_POSTS":
      return {
        ...state,
        isFetching: true,
        error: false,
        posts: null
      };
    case "SUCCESS_GET_POSTS":
      return {
        ...state,
        isFetching: true,
        error: false,
        posts: action.payload
      };
    case "ERROR_GET_POSTS":
      return {
        ...state,
        isFetching: false,
        error: action.error,
        posts: null
      };
    default:
      return state;
  }
}
