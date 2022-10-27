import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./img/logo.png";
const ForgetPw = () => {
  const Navi = useNavigate();

  const ResetPw = async () => {
    if (
      document.getElementById("userId").value !== "" &&
      document.getElementById("userName").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("tel").value !== ""
    ) {
      await axios
        .get(`http://nagatourweb.shop:8081/api/user/getUser`, {
          params: {
            userid: document.getElementById("userId").value,
            username: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            tel: document.getElementById("tel").value,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            alert("임시비밀번호를 전송하였습니다");
            ValidateEmail();
            Navi("/");
          } else {
            alert("해당 유저가 존재하지 않습니다.");
          }
        });
    } else {
      alert("전송실패!\n항목을 다시확인해주세요");
    }
  };

  //메일 전송
  const ValidateEmail = async () => {
    const data = await axios.get(`http://nagatourweb.shop:8081/sendPw`, {
      params: {
        email: document.getElementById("email").value,
        userid: document.getElementById("userId").value,
      },
    });
  };

  return (
    <div>
      <div className="main-container">
        <div className="main-wrap">
          <header>
            <div className="logo-wrap">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <div className="text-primary">비밀번호 재설정</div>
            </div>
          </header>
          <section className="login-input-section-wrap">
            <div className="mb-4 ">
              <span className="fw-bold d-block mb-1">아이디</span>
              <div className="login-input-wrap d-flex">
                <input id="userId" type="text" maxlength="20" />
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
              </div>
              <div>
                <div className="login-input-wrap d-flex">
                  <input id="email" type="text" maxlength="20"></input>
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
                  id="tel"
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

            <div className="login-button-wrap mb-5">
              <button onClick={ResetPw}>비밀번호 찾기</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgetPw;
