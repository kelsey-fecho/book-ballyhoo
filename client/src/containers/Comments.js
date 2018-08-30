import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CommentForm } from '../components/CommentForm'
import { CommentsList } from '../components/CommentsList'
import {persistComment, fetchComments} from '../actions/commentActions'

export class Comments extends Component {

  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    return(
      <React.Fragment>
        <CommentForm persistComment={this.props.persistComment}/>
        <CommentsList comments={this.props.comments}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, {persistComment, fetchComments})(Comments);
