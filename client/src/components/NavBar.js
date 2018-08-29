import React from 'react'
import {NavLink} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'
import logo from '../images/Book_Ballyhoo.png'

const NavBar = () => {
  return (
    <Container>
      <Row>
        <Col><NavLink to="/" exact className="nav-link"><img src={logo} width="500" alt="logo"/></NavLink></Col>
      </Row>
      <Row>
        <Col sm="4"><NavLink to="/fiction" exact className="nav-link">Combined Fiction</NavLink></Col>
        <Col sm="4"><NavLink to="/nonfiction" exact className="nav-link">Combined Non-Fiction</NavLink></Col>
      </Row>
    </Container>
  )
}

export default NavBar
