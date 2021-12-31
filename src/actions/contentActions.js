export const fetchContents = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/contents")
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "GET_CONTENT", contents: data });
      })
      .catch(fail => alert(fail));
  };
};