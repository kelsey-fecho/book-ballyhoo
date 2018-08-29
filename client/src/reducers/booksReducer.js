export default function booksReducer(state = {fiction: [], nonfiction:[], comments:[], loading: false}, action) {
 switch(action.type) {

   case 'LOADING':
    return  {...state, loading: true}

   case 'FETCH_FICTION':
    return {
      ...state,
      fiction: action.payload.map(book => ({title: book.book_details[0].title,
                                    desc: book.book_details[0].description,
                                    author: book.book_details[0].author,
                                    link: book.amazon_product_url}))
            }

    case 'FETCH_NONFICTION':
    return {
      ...state,
      nonfiction: action.payload.map(book => ({title: book.book_details[0].title,
                                    desc: book.book_details[0].description,
                                    author: book.book_details[0].author,
                                    link: book.amazon_product_url}))
            }

    case 'ADD_COMMENT':
      return Object.assign({}, state, {comments: state.comments.concat(action.comment)})

    default:
      return state;
 }
}
