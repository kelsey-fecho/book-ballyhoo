import React, {Component} from 'react'
import { Card, CardText, CardSubtitle, CardBody, CardTitle, Button} from 'reactstrap';

class BookCard extends Component {
  constructor(props){
    super(props);
    this.state={
      votes: 0
    }
  }

  handleUpvote = () => {
    this.setState(prevState => {
      votes: prevState.votes + 1
    })
  }

  handleDownvote = () => {
    this.setState({
      votes: this.state.votes - 1
    })
  }

  render(){
    return(
      <Card inverse style={{ backgroundColor: '#d9c5c5', margin: '1.25rem auto' }}>
        <CardBody>
        <CardTitle>{this.props.book.title}</CardTitle>
        <CardSubtitle>{this.props.book.author}</CardSubtitle>
        <CardText>{this.props.book.desc}</CardText>
        <Button href={this.props.book.link} target="_blank">Get It</Button>
        <Button onClick={this.handleUpvote} id="upvote">Upvote</Button>
        <Button onClick={this.handleDownvote} id="downvote">Downvote</Button>
        <h4>Votes: {this.state.votes}</h4>
        </CardBody>
      </Card>
    )
  }
}

export default BookCard
