import React, {Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
export class CommentForm extends Component {

  constructor(props){
    super(props);

    this.state={
      comment: '',
      author: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.persistComment(this.state)
    this.setState({
      comment: '',
      author: ''
    })
  }

  render(){
    return(
      <Container>
        <Row>
          <Col md={{ size: 11, offset: 2}} style={{margin: "1em", border: "1px solid #6c757d", padding: "1em"}}>
            <form onSubmit={this.handleSubmit}>
              <h4 style={{color: '#6c757d'}}>Let Us Know What You Think</h4>
              <div>
                <input type='text' name='author' id='newauthor'onChange={this.handleChange} value={this.state.author} placeholder="Your Name"/>
              </div>
              <br/>
              <div>
                <textarea rows='5' cols='80' name='comment' id='newtext' onChange={this.handleChange} value={this.state.comment} placeholder="All Your Thoughts Here"/>
              </div>
              <br/>
              <div>
                <input type="submit" className="btn btn-secondary"/>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CommentForm
