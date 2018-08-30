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
