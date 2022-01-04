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

export const createReview = (newReview) => {
  return (dispatch) => {
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: newReview.username,
        rating: newReview.rating,
        description: newReview.description,
        content_id: newReview.content_id
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "CREATE_REVIEW", reviews: data });
      })
      .catch(fail => alert(fail));
  };
};
export const deleteContent = (reviewId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/reviews/${reviewId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "DELETE_REVIEW", payload: reviewId });
      })
      .catch(fail => alert(fail));
  };
};