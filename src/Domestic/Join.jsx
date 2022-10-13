import React from "react";
import { Helmet } from "react-helmet-async";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Join = () => {
  return (
    <div className="main-container">
      <div className="main-wrap">
        <header>
          <Helmet>
            <title>당신의 여행 도우미 NAGA | SIGNUP</title>
          </Helmet>
          <div className="logo-wrap">
            <a href="http://localhost:3000">
              <img src={Logo} />
            </a>
          </div>
        </header>
        <section className="login-input-section-wrap">
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">아이디</span>
            <div className="login-input-wrap">
              <input id="id" type="text" maxlength="20"></input>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">비밀번호</span>
            <div className="login-input-wrap">
              <input id="pw" type="password" maxlength="20"></input>
            </div>
          </div>
          <div className="mb-5">
            <span className="fw-bold d-block mb-2">비밀번호 재확인</span>
            <div className="login-input-wrap">
              <input id="pwCheck" type="password" maxlength="20"></input>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">이름</span>
            <div className="login-input-wrap">
              <input id="name" type="text" maxlength="20"></input>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">성별</span>
            <select
              class="form-select form-select-lg mb-3"
              style={{ width: "465px" }}
              aria-label=".form-select-lg example"
            >
              <option selected>성별</option>
              <option value="1">남성</option>
              <option value="2">여성</option>
              <option value="3">선택 안함</option>
            </select>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">이메일</span>
            <div className="login-input-wrap d-flex">
              <input id="name" type="text" maxlength="20"></input>
              <h5 className="mt-2"> @ </h5>
              <select id="mail_Select" className="rounded ml-2 w-75">
                <option>선택</option>
                <option>naver.com</option>
                <option>gmail.com</option>
                <option>daum.net</option>
                <option>hanmail.net</option>
                <option>nate.com</option>
                <option>직접 입력</option>
              </select>
            </div>
          </div>
          <div className="mb-5">
            <span className="fw-bold d-block mb-2">휴대전화</span>
            {/* form 으로 처리하기 */}
            <div className="login-input-wrap d-flex">
              <input id="name" type="text" maxlength="20"></input>
              <button className="btn btn-primary w-50 px-2">
                인증번호 받기
              </button>
            </div>
          </div>

          <div className="login-button-wrap ">
            <button>Sign Up</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Join;
