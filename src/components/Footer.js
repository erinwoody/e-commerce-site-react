import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Your Website 2017</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://twitter.com/erinebeth">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/erin.woody.9">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/erin-woody/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      </div>
    );
  }
}
