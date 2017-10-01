import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}