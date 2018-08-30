import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import BookCard from '../components/BookCard'


const Books = props => (
    <Container>
      <Row>
        {props.books.map((book, index) => <Col sm="4"><BookCard book={book} key={index} /></Col>)}
      </Row>
    </Container>
)


export default Books
