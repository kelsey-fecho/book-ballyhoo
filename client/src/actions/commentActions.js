export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

/*** Async Requests ***/

export function fetchComments(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch('/api/comments')
     .then(res => {return res.json()})
     .then(results => {dispatch({type: 'FETCH_COMMENTS', payload: results})
   })
  }
}

export const persistComment = (props) => {
  return (dispatch) => {
    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: props })
    })
    .then(res => {return res.json()})
    .then(comment => {dispatch(addComment(comment))})
    .catch(error => console.log(error))
  }
}
