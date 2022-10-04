import React from "react";
import { Link } from "react-router-dom";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";
const DomNavBar = () => {
  return (
    <div>
      <DomMetaTag />
      <div className="container-fluid p-0 border border-top-0 pb-2">
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
            <div className="container text-start">
              {/* <h1 className="text-white display-3">Home</h1> */}
              <div className="input-group w-75 ">
                <div className="d-inline-flex">
                  <select
                    className="d-inline-flex form-select"
                    aria-label="Default select example"
                  >
                    <option selected>선택</option>
                    <option value="1">관광 & 문화</option>
                    <option value="2">축제</option>
                    <option value="3">숙박</option>
                    <option value="4">음식</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                />
              </div>
            </div>
            {/* <div className="navbar-nav m-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                Festival
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/price" className="nav-item nav-link">
                Price
              </Link>
              <Link to="/blog" className="nav-item nav-link">
                Pages
              </Link>
            </div> */}
            <Link
              to="/login"
              className="btn btn-primary py-2 px-4 d-none d-lg-block"
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DomNavBar;
