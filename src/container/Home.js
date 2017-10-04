import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import skull from "../img/skull.jpeg";
import pumpkins from "../img/pumpkins.jpeg";
import decor from "../img/decor.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" id="img-1">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Costumes</h3>
                  
                </div>
              </div>

              <div className="carousel-item" id="img-2">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Decor</h3>
                  
                </div>
              </div>

              <div className="carousel-item" id="img-3">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Treats</h3>
                  
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>

        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">SHOP NOW</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" href="/apparel">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={skull} alt="" />
                </a>
                <div className="portfolio-caption">
                <a className="" href="/apparel"><h4>COSTUMES</h4></a> 
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" href="/food">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={pumpkins} alt="" />
                </a>
                <div className="portfolio-caption">
                <a className="" href="/food"><h4>TREATS</h4></a> 
                </div>
              </div>

              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" href="/decor">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fa fa-plus fa-3x" />
                    </div>
                  </div>
                    <img className="img-fluid" src={decor} alt="" />
                </a>
                <div className="portfolio-caption">
                  <a className="" href="/decor"><h4>HOME DECOR</h4></a> 
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>
    );
  }
}
