import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import productData from "../data/productData.js";

export default class ProductDetail extends Component {
    render() {
        const { id, productline } = this.props.match.params;
        let product = productData[productline].find(item => item.id === id)

        return (
            <div className="product-details">
                <div>
                    <img alt="" src={product.fullSizeImg} />
                    <p>{product.productTitle}</p>
                    <p>{product.productDescription}</p>
                    <p>{product.price}</p>
                </div>
                <Link className="btn btn-large btn-danger" to="/">Back To Home</Link>
                <Link className="btn btn-large btn-danger" to="/">Add to Cart</Link>
            </div>
        )
    }
}