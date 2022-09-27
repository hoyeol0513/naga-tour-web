import React from "react";
import DomNavBar from "./components/DomNavBar";

const Blog = () => {
  return (
    <>
      <DomNavBar />
      {/* <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i
                className="fa fa-truck mr
              -2"
              ></i>
              Faster
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <a href="index.html" className="nav-item nav-link">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="price.html" className="nav-item nav-link">
                Price
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item active">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Get A Quote
            </a>
          </div>
        </nav>
      </div> */}
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Latest Blog</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="img/blog-1.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="img/user.jpg"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="img/blog-2.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="img/user.jpg"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="img/blog-1.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="img/user.jpg"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="mb-5">
              <div className="bg-secondary" style={{ padding: "30px" }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Keyword"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Categories</h3>
              <div className="bg-secondary" style={{ padding: "30px" }}>
                <ul className="list-inline m-0">
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>Web
                      Design
                    </a>
                    <span className="badge badge-secondary badge-pill">
                      150
                    </span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>Web
                      Development
                    </a>
                    <span className="badge badge-secondary badge-pill">
                      131
                    </span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Online Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">78</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Keyword Research
                    </a>
                    <span className="badge badge-secondary badge-pill">56</span>
                  </li>
                  <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Email Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">98</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Recent Post</h3>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-2.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-2.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
            </div>

            <div className="mb-5">
              <img src="img/blog-1.jpg" alt="" className="img-fluid" />
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Tag Cloud</h3>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-secondary m-1">
                  Design
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Development
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Marketing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  SEO
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Writing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Consulting
                </a>
              </div>
            </div>

            <div className="mb-5">
              <img src="img/blog-2.jpg" alt="" className="img-fluid" />
            </div>

            <div>
              <h3 className="mb-4">Plain Text</h3>
              <div
                className="bg-secondary text-center"
                style={{ padding: "30px" }}
              >
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <a href="" className="btn btn-primary py-2 px-4">
                  Read More
                </a>
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
              &copy <a href="#">Your Site Name</a>. All Rights Reserved.
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
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-truck mr-2"></i>Faster
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <a href="index.html" className="nav-item nav-link">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Service
              </a>
              <a href="price.html" className="nav-item nav-link">
                Price
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle active"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item active">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Get A Quote
            </a>
          </div>
        </nav>
      </div>
      <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
          <h1 className="text-white display-3">Latest Blog</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5f%2F0a%2Ff7%2F5f0af76c76607bbc771e2ca9460c05e1.jpg&type=sc960_832"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5f%2F0a%2Ff7%2F5f0af76c76607bbc771e2ca9460c05e1.jpg&type=sc960_832"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5f%2F0a%2Ff7%2F5f0af76c76607bbc771e2ca9460c05e1.jpg&type=sc960_832"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5f%2F0a%2Ff7%2F5f0af76c76607bbc771e2ca9460c05e1.jpg&type=sc960_832"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src="img/blog-1.jpg"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 className="font-weight-bold mb-n1">01</h4>
                    <small className="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div className="bg-secondary mb-3" style={{ padding: "30px" }}>
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src="img/user.jpg"
                        alt=""
                      />
                      <a className="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div className="d-flex align-items-center ml-4">
                      <i className="far fa-bookmark text-primary"></i>
                      <a className="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 className="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    className="border-bottom border-primary text-uppercase text-decoration-none"
                    href=""
                  >
                    Read More <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="mb-5">
              <div className="bg-secondary" style={{ padding: "30px" }}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Keyword"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Categories</h3>
              <div className="bg-secondary" style={{ padding: "30px" }}>
                <ul className="list-inline m-0">
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>Web
                      Design
                    </a>
                    <span className="badge badge-secondary badge-pill">
                      150
                    </span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>Web
                      Development
                    </a>
                    <span className="badge badge-secondary badge-pill">
                      131
                    </span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Online Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">78</span>
                  </li>
                  <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Keyword Research
                    </a>
                    <span className="badge badge-secondary badge-pill">56</span>
                  </li>
                  <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a className="text-dark" href="#">
                      <i className="fa fa-angle-right text-primary mr-2"></i>
                      Email Marketing
                    </a>
                    <span className="badge badge-secondary badge-pill">98</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Recent Post</h3>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-2.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-2.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div className="d-flex mb-3">
                <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
            </div>

            <div className="mb-5">
              <img src="img/blog-1.jpg" alt="" className="img-fluid" />
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Tag Cloud</h3>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-secondary m-1">
                  Design
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Development
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Marketing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  SEO
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Writing
                </a>
                <a href="" className="btn btn-secondary m-1">
                  Consulting
                </a>
              </div>
            </div>

            <div className="mb-5">
              <img src="img/blog-2.jpg" alt="" className="img-fluid" />
            </div>

            <div>
              <h3 className="mb-4">Plain Text</h3>
              <div
                className="bg-secondary text-center"
                style={{ padding: "30px" }}
              >
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <a href="" className="btn btn-primary py-2 px-4">
                  Read More
                </a>
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
              &copy <a href="#">Your Site Name</a>. All Rights Reserved.
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
    </>
  );
};

export default Blog;
