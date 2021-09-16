import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Container, Row } from 'react-bootstrap';
//import Header from './components/Header';
//import Navigation from './components/Navigation';
import './style.css';

//Pages
import Home from './containers/Home';
//import ContactsExample from './containers/Contacts';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Container fluid className="wrapper">
          {/*
          <div className="sidebar">
            <Header title={"ULN"} subtitle={"Universal Linking Network"} />
            <Navigation />
          </div>
          */}
          <Container fluid className="main-content">
            <Route exact path="/" component={Home} />
          </Container>
          <ToastContainer autoClose={2000} />
        </Container>
      </Router>
    );
  }
}