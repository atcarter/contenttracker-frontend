import { combineReducers } from "redux";

const reducer = combineReducers({
  contents: contentsReducer,
  reviews: reviewsReducer
});

export default reducer;

function contentsReducer(state = [], action) {
  switch (action.type) {
    case "GET_CONTENT":
      return[...state, action.contents];

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
      return[...state, action.reviews];

      case "GET_REVIEWS":
        return{
          ...state,
          contents: [...state.contents],
          reviews: [...state.reviews, action.reviews]
        };
      case "CREATE_CONTENT":
        return{
          ...state,
          reviews: [...state.reviews],
          contents: [...state.contents, action.content]
        };
      case "DELETE_CONTENT":
        return{
          ...state,
          reviews: action.reviews
        };
  
    default:
      return state;
  }
}

// function contentReducer(state = { contents: [], reviews: []}, action){
//   switch (action.type) {
//     case "GET_CONTENT":
//       return{
//         ...state,
//         books: [...state.books],
//         contents: [...state.contents, action.contents]
//       };
//       case "GET_REVIEWS":
//         return{
//           ...state,
//           contents: [...state.contents],
//           reviews: [...state.reviews, action.reviews]
//         };
//       case "CREATE_CONTENT":
//         return{
//           ...state,
//           reviews: [...state.reviews],
//           contents: [...state.contents, action.content]
//         };
//       case "DELETE_CONTENT":
//         return{
//           ...state,
//           reviews: action.reviews
//         };
  
//     default:
//       return state;
//   }
// }