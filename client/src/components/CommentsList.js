import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Comment from '../components/Comment'

export class CommentsList extends Component{
  render(){
    return(
      <Container>
          {this.props.comments.map((comment, index) =>
            <Row><Col md={{ size: 8, offset: 2}} className="border rounded align-middle"><Comment comment={comment} key={index} /></Col></Row>
          )}
      </Container>
    )
  }
}

export default CommentsList
