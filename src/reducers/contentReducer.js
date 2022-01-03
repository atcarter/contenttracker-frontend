export default function contentReducer(state = { contents: [], reviews: []}, action){
  switch (action.type) {
    case "GET_CONTENT":
      return{
        ...state,
        contents: action.contents
      };
      case "GET_REVIEWS":
        return{
          ...state,
          reviews: action.reviews
        };
  
    default:
      return state;
  }
}