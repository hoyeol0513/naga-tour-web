import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import DomMetaTag from "./components/DomMetaTag";
import axios from "axios";
import "bootstrap/js/src/collapse.js";
import DomFestivalSlick from "./components/DomFestivalSlick";
import DomLodSlick from "./components/DomLodSlick";
import DomRentSlick from "./components/DomRentSlick";
import DomNavBar from "./components/DomNavBar";
import Wording from "./components/Wording";

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

      <DomNavBar />

      {/* //<LocationTable si={si} /> 
      <nav style={{ marginTop: "100px", textAlign: "center" }}>
        {si.map((v, index) => (
          <button
            key={index}
            type="button"
            className="btn btn-primary m-2"
            onClick={() => {
              setCity(v.name);
              setCityCode(v.code);
            }}
          >
            {v.name}
          </button>
        ))}
        <ul
          style={{
            display: "inline-block",
            padding: "0 20px",
            borderRadius: "10px",
          }}
        ></ul>
      </nav>
      */}

      <DomFestivalSlick CityCode={cityCode} />
      <DomLodSlick CityCode={cityCode} />
      <DomRentSlick CityName={city} />

      {/* 글귀 */}
      <section className="py-5">
        <div className="container px-5 my-2 px-5">
          <div className="text-center mb-4">
            <h1
              className="text-dark font-weight-bold text-center pb-3"
              id="KOTRALEAP"
            >
              Today's travel phrase
            </h1>
            <p className="lead mb-0"></p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-4">
                <Wording />
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default DomMain;
