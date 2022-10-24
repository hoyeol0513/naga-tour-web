import axios from "axios";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const Navi = useNavigate();
  const userLogin = () => {
    axios
      .get(`/user/login`, {
        params: {
          userid: userid,
          password: password,
        },
      })
      .then((res) => {
        if (res.data !== "") {
          console.log("로그인정보", res);
          localStorage.setItem("user_id", userid);
          alert("로그인성공");
          Navi(-1);
        } else {
          localStorage.clear();
          console.log("로그인실패");
          alert(
            "로그인에 실패하였습니다. \n아이디 또는 패스워드를 확인해주세요"
          );
        }
      });
  };

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
            <input
              placeholder="Username"
              type="text"
              value={userid}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            ></input>
          </div>
          <div className="login-input-wrap password-wrap">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="login-button-wrap">
            <button onClick={userLogin}>Sign in</button>
          </div>
          <div className="login-stay-sign-in">
            <i className="far fa-check-circle"></i>
            <span>Stay Signed in</span>
          </div>
        </section>

        <section className="d-flex justify-content-center">
          <a className="pr-2" style={{ color: "rgba(0,0,0,0.2)" }}>
            Forgot your Username or Password? |
          </a>
          <Link
            to="/signup"
            style={{ color: "rgba(0,0,0,0.2)", textDecoration: "underline" }}
          >
            Sign up
          </Link>
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
