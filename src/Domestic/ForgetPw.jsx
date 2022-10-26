import React from "react";
import Logo from "./img/logo.png";
const ForgetPw = () => {
  return (
    <div>
      <div className="main-container">
        <div className="main-wrap">
          <header>
            <div className="logo-wrap">
              <a href="http://nagatourweb.shop">
                <img src={Logo} alt="logo" />
              </a>
              <div className="text-primary">비밀번호 찾기</div>
            </div>
          </header>
          <section className="login-input-section-wrap">
            <div className="mb-4 ">
              <span className="fw-bold d-block mb-1">아이디</span>
              <div className="login-input-wrap d-flex">
                <input id="id" type="text" maxlength="20" />
              </div>

              <span
                className="d-block mt-2"
                style={{ color: "red", fontSize: "12px" }}
              ></span>

              <span
                className="d-block mt-2"
                style={{ color: "green", fontSize: "12px" }}
              ></span>
            </div>

            <div className="mb-4">
              <span className="fw-bold d-block mb-1">이름</span>
              <div className="login-input-wrap">
                <input id="userName" type="text" maxlength="20"></input>

                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                ></span>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex">
                <span className="fw-bold d-block mb-1">이메일</span>

                <span
                  className="ml-2 mt-1"
                  style={{ color: "red", fontSize: "12px" }}
                ></span>

                <span
                  className=" ml-2 mt-1"
                  style={{ color: "green", fontSize: "12px" }}
                ></span>
              </div>
              <div>
                <div className="login-input-wrap d-flex">
                  <input id="userID" type="text" maxlength="20"></input>
                  <button className="btn btn-primary btn-block w-50 px-1 ">
                    인증번호 받기
                  </button>
                </div>
              </div>

              <div>
                <div>
                  <span id="codecheck"></span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-2 fw-bold d-block mb-2">휴대전화</span>
              <div className="login-input-wrap ">
                <input
                  id="PhoneNumber"
                  className="d-flex"
                  type="text"
                  maxlength="20"
                ></input>

                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                ></span>

                <span
                  className="d-flex mt-2"
                  style={{ color: "green", fontSize: "12px" }}
                ></span>
              </div>
            </div>

            <div className="login-button-red mb-5">
              <button>비밀번호 찾기</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgetPw;
