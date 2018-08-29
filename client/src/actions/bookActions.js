const API_KEY =`${process.env.REACT_APP_NYT_API_KEY}`

export function fetchFiction(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=combined-print-and-e-book-fiction&api-key=${API_KEY}`)
     .then(res => {return res.json()})
     .then(({results}) => {dispatch({type: 'FETCH_FICTION', payload: results})
   })
  }
}

export function fetchNonfiction(){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=combined-print-and-e-book-nonfiction&api-key=${API_KEY}`)
     .then(res => {return res.json()})
     .then(({results}) => {dispatch({type: 'FETCH_NONFICTION', payload: results})
   })
  }
}
