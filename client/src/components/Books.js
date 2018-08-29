import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import BookCard from '../components/BookCard'

class Books extends Component {
  render() {
    return(
      <Container>
        <Row>
          {this.props.books.map((book, index) => <Col sm="4"><BookCard book={book} key={index} /></Col>)}
        </Row>
      </Container>
    );
  }
}

export default Books
