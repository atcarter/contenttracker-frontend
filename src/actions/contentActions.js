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

export const createContent = (newContent, history) => {
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
        dispatch({ type: "CREATE_CONTENT", content: data });
        history.push("/contents")
      })
      .catch(fail => alert(fail));
  };
};

export const deleteContent = (contentId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/contents/${contentId}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "DELETE_CONTENT", payload: contentId });
      })
      .catch(fail => alert(fail));
  };
};