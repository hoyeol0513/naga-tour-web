import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Styles from "./css/style.css";
import { Link } from "react-router-dom";
import owl from "./lib/owlcarousel/assets/owl.carousel.min.css";
import ScrollTop from "../components/ScrollTop";
import DomMetaTag from "./components/DomMetaTag";
import axios from "axios";
import "bootstrap/js/src/collapse.js";
import DomFestivalSlick from "./components/DomFestivalSlick";
import DomService from "./components/DomServiceMenu";
import DomLodSlick from "./components/DomLodSlick";
import DomServiceMenu from "./components/DomServiceMenu";
import DomRentSlick from "./components/DomRentSlick";

const DomMain = () => {
  const [si, setSi] = useState([]);
  const [city, setCity] = useState("");
  const [cityCode, setCityCode] = useState(1);
  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  useEffect(() => {
    async function getSi() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/areaCode?serviceKey=${servicekey}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`
        );

        setSi(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    }
    getSi();
  }, []);
  return (
    <div>
      <DomMetaTag />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | DOMHOME</title>
      </Helmet>

      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <i className="fa fa-1x fa-plane text-blue pr-2"></i>NAGA
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <Link to="/submain" className="nav-item nav-link active">
                Home
              </Link>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/service" className="nav-item nav-link">
                Service
              </a>
              <a href="/price" className="nav-item nav-link">
                Price
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              {/* <a href="contact.html" className="nav-item nav-link">
                Contact
              </a> */}
            </div>
            <Link
              to="/login"
              className="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
      <div
        className="jumbotron jumbotron-fluid mb-5"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="text-white mb-4 fs-1">국내</h1>

          <div className="mx-auto">
            <div className="input-group">
              <div className="input-group-append"></div>
            </div>
          </div>
        </div>
      </div>
      {/* //<LocationTable si={si} /> */}
      <nav style={{ marginTop: "100px", textAlign: "center" }}>
        <ul
          style={{
            display: "inline-block",
            padding: "0 20px",
            borderRadius: "10px",
          }}
        >
          <DomServiceMenu />
          {si.map((v, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-light"
              onClick={() => {
                setCity(v.name);
                setCityCode(v.code);
              }}
            >
              {v.name}
            </button>
          ))}
          <div>{city}의 지역정보 입니다.</div>
        </ul>
      </nav>
      <DomFestivalSlick CityCode={cityCode} />
      <DomLodSlick CityCode={cityCode} />
      <DomRentSlick CityName={city} />

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
                <img
                  className="card-img-top"
                  src={require("../Domestic/img/team-1.jpg")}
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team card position-relative overflow-hidden border-0 mb-5">
                <img
                  className="card-img-top"
                  src={require("../Domestic/img/team-2.jpg")}
                  alt=""
                />
                <div className="card-body text-center p-0">
                  <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 className="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
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
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
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
                      href="/"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-dark btn-social mr-2"
                      href="/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-outline-dark btn-social" href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary text-uppercase font-weight-bold">
              Our Blog
            </h6>
            <h1 className="mb-4">Latest From Blog</h1>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
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
              <div className="bg-secondary">
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      // style="width: 40px; height: 40px;"
                      src="img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="/">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="/">
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
                  href="/"
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="position-relative">
                <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                <div
                  className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                  // style="width: 60px; height: 60px; bottom: -30px; right: 30px;"
                >
                  <h4 className="font-weight-bold mb-n1">01</h4>
                  <small className="text-white text-uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-secondary">
                <div className="d-flex mb-3">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      // style="width: 40px; height: 40px;"
                      src="img/user.jpg"
                      alt=""
                    />
                    <a className="text-muted ml-2" href="/">
                      John Doe
                    </a>
                  </div>
                  <div className="d-flex align-items-center ml-4">
                    <i className="far fa-bookmark text-primary"></i>
                    <a className="text-muted ml-2" href="/">
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
                  href="/"
                >
                  Read More <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social mr-2" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Our Services
                  </a>
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Pricing Plan
                  </a>
                  <a className="text-white" href="/">
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
        style={{ borderColor: "#3E3E4E" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <Link to="/">Your Site Name</Link>. All Rights Reserved.
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button>
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
};

export default DomMain;
