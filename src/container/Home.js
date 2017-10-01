import React, { Component } from "react";

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
                  <h3>First Slide</h3>
                  <p>This is a description for the first slide.</p>
                </div>
              </div>

              <div className="carousel-item" id="img-2">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second Slide</h3>
                  <p>This is a description for the second slide.</p>
                </div>
              </div>

              <div className="carousel-item" id="img-3">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third Slide</h3>
                  <p>This is a description for the third slide.</p>
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

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Services</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">E-Commerce</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Responsive Design</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary" />
                  <i className="fa fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Web Security</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-light" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Threads</h4>
              <p className="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Explore</h4>
              <p className="text-muted">Graphic Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Finish</h4>
              <p className="text-muted">Identity</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Lines</h4>
              <p className="text-muted">Branding</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Southwest</h4>
              <p className="text-muted">Website Design</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt=""/>
            </a>
            <div className="portfolio-caption">
              <h4>Window</h4>
              <p className="text-muted">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section class="bg-light" id="team">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading">Our Amazing Team</h2>
                <h3 class="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/team/1.jpg"
                    alt=""
                  />
                  <h4>Kay Garland</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="../img/profile.png"
                    alt=""
                  />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://twitter.com/erinebeth">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/erin.woody.9">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/erin-woody/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="img/team/3.jpg"
                    alt=""
                  />
                  <h4>Diana Pertersen</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
