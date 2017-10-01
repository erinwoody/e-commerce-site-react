import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import productData from "../data/productData.js";

export default class ProductLine extends Component {
  render() {
    let { productline } = this.props.match.params;
    let productLineData = productData[productline];

    let products = productLineData.map(product => {
      return (
        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="img-ctr">
              <NavLink
                activeClassName="selected"
                className="navlink"
                to={`${productline}/${product.id}`}
              >
                <img
                  className="card-img-top"
                  src={product.productImg}
                  alt={product.productTitle}
                />
              </NavLink>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <NavLink
                  activeClassName="selected"
                  className="navlink"
                  to={`${productline}/${product.id}`}
                >
                  <p>{product.productTitle}</p>
                </NavLink>
              </h4>
              <h5>{product.price}</h5>
              <NavLink to={`${productline}/${product.id}`}>Details</NavLink>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container product-ctr">
        <div className="row product-line">{products}</div>
      </div>
    );
  }
}
