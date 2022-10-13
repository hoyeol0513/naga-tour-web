import React from "react";
import { Helmet } from "react-helmet-async";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Login = () => {
  return (
    <div className="main-container">
      <div className="main-wrap">
        <header>
          <Helmet>
            <title>당신의 여행 도우미 NAGA | LOGIN</title>
          </Helmet>
          <div className="sel-lang-wrap">
            <select className="lang-select">
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>
          <div className="logo-wrap">
            <a href="http://localhost:3000">
              <img src={Logo} />
            </a>
          </div>
        </header>
        <section className="login-input-section-wrap">
          <div className="login-input-wrap">
            <input placeholder="Username" type="text"></input>
          </div>
          <div className="login-input-wrap password-wrap">
            <input placeholder="Password" type="password"></input>
          </div>
          <div className="login-button-wrap">
            <button>Sign in</button>
          </div>
          <div className="login-stay-sign-in">
            <i className="far fa-check-circle"></i>
            <span>Stay Signed in</span>
          </div>
        </section>
        <section className="Easy-sgin-in-wrap">
          <h2>Easier sign in</h2>
          <ul className="sign-button-list">
            <li>
              <button>
                <i className="fas fa-qrcode"></i>
                <span>Sign in with QR code</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fab fa-facebook-square"></i>
                <span>Facebook</span>
              </button>
            </li>
            <li>
              <button>
                <i className="fab fa-line"></i>
                <span>line</span>
              </button>
            </li>
          </ul>
          <p className="forget-msg">
            Forgot your Username or Password? | Sign up
          </p>
        </section>
        <footer>
          <div className="copyright-wrap">
            <span>
              {" "}
              <img src={Logo} /> Copyright © NAVER Corp. All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
