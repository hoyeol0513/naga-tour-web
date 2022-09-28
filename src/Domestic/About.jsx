import React from "react";
import { Helmet } from "react-helmet-async";
import DomNavBar from "./components/DomNavBar";

const About = () => {
  return (
    <div>
      <DomNavBar />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | ABOUT</title>
      </Helmet>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">About</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">About</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img className="img-fluid w-100" src="img/about.jpg" alt="" />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">25+ Years Experience</h3>
              </div>
            </div>
            <div className="col-lg-7">
              <h6 className="text-primary text-uppercase font-weight-bold">
                About Us
              </h6>
              <h1 className="mb-4">
                Trusted & Faster Logistic Service Provider
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div className="d-flex align-items-center pt-2">
                <button
                  type="button"
                  className="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
            </div>
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">
                Why Choose Us
              </h6>
              <h1 className="mb-4">
                Faster, Safe and Trusted Logistics Services
              </h1>
              <p className="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <ul className="list-inline">
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>Best
                    In Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>
                    Emergency Services
                  </h6>
                </li>
                <li>
                  <h6>
                    <i className="far fa-dot-circle text-primary mr-3"></i>24/7
                    Customer Support
                  </h6>
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-3 py-2 px-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Delivery Team
            </h6>
            <h1 className="mb-4">Meet Our Delivery Team</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-1.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-2.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-3.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img className="card-img-top" src="img/team-4.jpg" alt="" />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New
                  York, USA
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Our Services
                  </a>
                  <a className="text-white mb-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Pricing Plan
                  </a>
                  <a className="text-white" href="#">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "#3E3E4E !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a href="#">Your Site Name</a>. All Rights Reserved.
              Designed by <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default About;
