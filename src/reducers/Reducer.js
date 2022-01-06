import { combineReducers } from "redux";

const reducer = combineReducers({
  contents: contentsReducer,
  reviews: reviewsReducer
});

export default reducer;

function contentsReducer(state = [], action) {
  switch (action.type) {
    case "GET_CONTENT":
      return [...state, ...action.contents]

      case "CREATE_CONTENT":
        return[...state, action.content];

      case "DELETE_CONTENT":
        return[...state].filter(elem => elem.id !== action.payload);
  
    default:
      return state;
  }
}

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case "GET_REVIEWS":
      return [...state, ...action.reviews]


      case "CREATE_REVIEW":
        return[...state, action.review];

      case "DELETE_REVIEW":
        return[...state].filter(elem => elem.id !== action.payload);
  
    default:
      return state;
  }
}

