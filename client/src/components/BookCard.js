import React from 'react'
import { Card, CardText, CardSubtitle, CardBody, CardTitle, Button } from 'reactstrap';


const BookCard = ({book}) =>
  <Card inverse style={{ backgroundColor: '#d9c5c5', margin: '1.25rem auto' }}>
    <CardBody>
    <CardTitle>{book.title}</CardTitle>
    <CardSubtitle>{book.author}</CardSubtitle>
    <CardText>{book.desc}</CardText>
    <Button href={book.link} target="_blank">Get It</Button>
    </CardBody>
  </Card>



export default BookCard
