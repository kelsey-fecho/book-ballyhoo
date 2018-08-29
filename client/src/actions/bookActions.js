/** Async Requests**/

export function fetchFiction(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch('/api/book?q=fiction')
     .then(res => {return res.json()})
     .then(results => {dispatch({type: 'FETCH_FICTION', payload: results})
   })
  }
}

export function fetchNonfiction(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch('/api/book?q=nonfiction')
     .then(res => {return res.json()})
     .then(results => {dispatch({type: 'FETCH_NONFICTION', payload: results})
   })
  }
}
