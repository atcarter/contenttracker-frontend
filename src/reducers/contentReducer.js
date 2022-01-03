export default function contentReducer(state = { contents: [], reviews: []}, action){
  switch (action.type) {
    case "GET_CONTENT":
      return{
        ...state,
        contents: action.contents
      };
  
    default:
      return state;
  }
}