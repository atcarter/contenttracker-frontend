export const fetchReviews = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/reviews")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "GET_REVIEWS", reviews: data });
      })
      .catch(fail => alert(fail));
  };
};