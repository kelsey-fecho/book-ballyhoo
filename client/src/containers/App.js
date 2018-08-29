import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Books from '../components/Books'
import NavBar from '../components/NavBar'
import Comments from './Comments'
import {fetchFiction, fetchNonfiction} from'../actions/bookActions'

export class App extends Component {

  componentDidMount(){
    this.props.fetchFiction();
    this.props.fetchNonfiction();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path='/' component={() => <Books books={this.props.fiction}/>} />
          <Route exact path='/fiction' component={() => <Books books={this.props.fiction}/>} />
          <Route exact path='/nonfiction' component={() => <Books books={this.props.nonfiction}/>} />
          <Comments />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    fiction: state.fiction,
    nonfiction: state.nonfiction,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchFiction: () => dispatch(fetchFiction()),
    fetchNonfiction: () => dispatch(fetchNonfiction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
