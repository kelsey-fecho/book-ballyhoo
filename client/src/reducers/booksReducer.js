export default function booksReducer(state = {fiction: [], nonfiction:[], comments:[], loading: false}, action) {
 switch(action.type) {

   case 'LOADING':
    return  {...state, loading: true}

   case 'FETCH_FICTION':
    return {
      ...state,
      fiction: action.payload.map(book => ({title: book.title,
                                    desc: book.desc,
                                    author: book.author,
                                    link: book.url}))
            }

  case 'FETCH_NONFICTION':
    return {
      ...state,
      nonfiction: action.payload.map(book => ({title: book.title,
                                    desc: book.desc,
                                    author: book.author,
                                    link: book.url}))
            }

    case 'ADD_COMMENT':
      return Object.assign({}, state, {comments: state.comments.concat(action.comment)})

    case 'FETCH_COMMENTS':
      return {
        ...state,
        comments: action.payload.map(comment => ({comment: comment.comment,
                                                  author: comment.author}))
      }

    default:
      return state;
 }
}
