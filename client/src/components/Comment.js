import React from 'react'

const Comment = ({comment}) =>
  <div style={{padding: "1em"}}>
    <h5>{comment.comment}</h5>
    <p><i>by: {comment.author}</i></p>
  </div>


export default Comment
