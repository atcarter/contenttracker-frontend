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

export const createContent = (newContent) => {
  return (dispatch) => {
    fetch("http://localhost:3000/contents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: newContent.title,
        year: newContent.year,
        content_type: newContent.content_type,
        details: newContent.details
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "CREATE_CONTENT", contents: data });
      })
      .catch(fail => alert(fail));
  };
};