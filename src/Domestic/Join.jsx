import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Join = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwcheck, setPwcheck] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setgender] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const Navi = useNavigate();
  var idLimit = /^[a-zA-Z0-9-_]{5,20}$/;
  var pwLimit = /^[a-zA-Z0-9~!@#$%^&*()_-]{10,20}$/;
  const regExp = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
  var pnumLimit = /^01[0|1|6|7|8|9]{1}[0-9]{8}$/;

  //가입하기 눌렀을 때 유효성 검사
  const joincheck = () => {
    if (
      document.getElementById("id").innerHTML === "" ||
      document.getElementById("pw").innerHTML === "" ||
      document.getElementById("name").innerHTML === "" ||
      document.getElementById("email").innerHTML === "" ||
      document.getElementById("tel").innerHTML === ""
    ) {
      if (id === "") {
        document.getElementById("id").innerHTML = "아이디를 입력해주세요.";
      } else if (!idLimit.test(id)) {
        document.getElementById("id").innerHTML =
          "올바르지 않은 형식. 다시 확인하세요.";
      }
      if (pw === "") {
        document.getElementById("pw").innerHTML = "비밀번호를 입력해주세요.";
      } else if (!pwLimit.test(pw)) {
        document.getElementById("pwcheck").innerHTML =
          "올바르지 않은 형식. 다시 확인하세요.";
      } else if (pwcheck === "") {
        document.getElementById("pwcheck").innerHTML =
          "비밀번호 재확인을 위해 입력해주세요.";
      } else if (pwcheck !== pw) {
        document.getElementById("pwcheck").innerHTML = "비밀번호 불일치";
      }
      if (username === "") {
        document.getElementById("name").innerHTML = "이름을 입력해주세요.";
      }
      if (email === "") {
        document.getElementById("email").innerHTML = "이메일을 입력해주세요.";
      } else if (document.getElementById("email2").innerHTML === "") {
      }
      if (tel === "") {
        document.getElementById("tel").innerHTML = "전화번호를 입력해주세요.";
      } else if (!pnumLimit.test(tel)) {
        document.getElementById("tel").innerHTML =
          "올바르지 않은 형식. 다시 확인하세요.";
      } else {
        CreateUser();
        alert("생성되었습니다");
        Navi(``);
      }
    }
  };

  //아이디 입력시 유효성 검사
  const validateId = (id) => {
    // return true;
    if (id === "") {
      document.getElementById("id").innerHTML = "아이디를 입력해주세요.";
    } else {
      document.getElementById("id").innerHTML = "";
      if (!idLimit.test(id)) {
        document.getElementById("id").innerHTML =
          "올바르지 않은 형식. 다시 확인하세요.";
      }
    }

    if (id.search(/\s/) !== -1) {
      document.getElementById("id").innerHTML = "아이디에 공백 불가.";
    }
  };

  //비밀번호 입력시 유효성 검사
  const validatePw = (pw) => {
    if (pw === "") {
      document.getElementById("pw").innerHTML = "비밀번호를 입력해주세요.";
    } else {
      document.getElementById("pw").innerHTML = "";
      if (!pwLimit.test(pw)) {
        document.getElementById("pw").innerHTML =
          "올바르지 않은 형식. 다시 확인하세요.";
      }
    }
    if (pw.search(/\s/) !== -1) {
      document.getElementById("pw").innerHTML = "비밀번호에 공백 불가.";
    }
  };
  const validateName = (username) => {
    if (username === "") {
      document.getElementById("name").innerHTML = "이름을 입력해주세요.";
    } else {
      document.getElementById("name").innerHTML = "";
    }
  };
  const validateEmail = (email) => {
    if (email === "") {
      document.getElementById("email").innerHTML = "이메일을 입력해주세요.";
    } else {
      if (!regExp.test(email)) {
        document.getElementById("email").innerHTML =
          "올바르지 않은 형식. 다시 입력해주세요.";
        if (email.search(/\s/) !== -1) {
          document.getElementById("email").innerHTML = "이메일에 공백 불가.";
        }
        document.getElementById("email2").innerHTML = "";
      } else {
        document.getElementById("email").innerHTML = "";
        document.getElementById("email2").innerHTML = "인증되었습니다.";
        alert("인증메일을 보냈습니다.");
      }
    }
  };
  const validateTel = (tel) => {
    if (tel === "") {
      document.getElementById("tel").innerHTML = "전화번호를 입력해주세요.";
    } else {
      document.getElementById("tel").innerHTML = "";
      if (!pnumLimit.test(tel)) {
        document.getElementById("tel").innerHTML =
          "올바르지 않은 형식. 다시 입력해주세요. ";
      } else {
        document.getElementById("tel").innerHTML = "";
      }
    }
    if (tel.search(/\s/) !== -1) {
      document.getElementById("tel").innerHTML = "전화번호에 공백 불가.";
    }
  };

  const CreateUser = () => {
    axios.get(`/user/create`, {
      params: {
        userid: id,
        username: username,
        password: pw,
        email: email,
      },
    });
  };

  return (
    <div className="main-container">
      <div className="main-wrap">
        <header>
          <div className="logo-wrap">
            <a href="http://localhost:3000">
              <img src={Logo} alt="logo" />
            </a>
          </div>
        </header>

        <section className="login-input-section-wrap">
          <div className="mb-3">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-1">아이디</span>
              <span id="id" className="block fs-6 text-danger"></span>
            </div>
            <div className="login-input-wrap mb-1">
              {/* form의 submit으로 나중에 db와 유효성 검사  (return  t/f) 
                const data = async() ~*/}
              <input
                type="text"
                maxLength="20"
                minLength="5"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                  validateId(e.target.value);
                }}
              ></input>
            </div>
            <span
              id="id2"
              className={`mb-1 ${
                idLimit.test(id)
                  ? "text-success"
                  : "text-secondary text-opacity-50"
              }`}
            >
              ✔️5~20자 영문대소문자, 숫자, 특수기호(_),(-) 사용가능
            </span>
          </div>
          <div className="mb-3">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-1">비밀번호</span>
              <span id="pw" className="block fs-6 text-danger"></span>
            </div>
            <div className="login-input-wrap mb-1">
              <input
                type="password"
                maxLength="20"
                minLength="10"
                value={pw}
                onChange={(e) => {
                  setPw(e.target.value);
                  validatePw(e.target.value);
                }}
              ></input>
            </div>
            <span
              id="pw2"
              className={`mb-1 ${
                pwLimit.test(pw)
                  ? "text-success"
                  : "text-secondary text-opacity-50"
              }`}
            >
              ✔️10~20자 영문대소문자, 숫자, 특수기호(~!@#$%^&*_-)만 가능
            </span>
          </div>
          <div className="mb-5">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-2">비밀번호 재확인</span>
              <span
                id="pwcheck"
                className={`block fs-6 ${
                  pwcheck !== "" && pwcheck === pw
                    ? "text-success"
                    : "text-danger"
                }`}
              ></span>
            </div>
            <div className="login-input-wrap">
              <input
                type="password"
                maxLength="20"
                value={pwcheck}
                onChange={(e) => {
                  setPwcheck(e.target.value);
                  if (e.target.value === "") {
                    document.getElementById("pwcheck").innerHTML =
                      "비밀번호를 확인해주세요.";
                  } else {
                    if (e.target.value !== pw) {
                      document.getElementById("pwcheck").innerHTML =
                        "비밀번호 불일치";
                    } else {
                      document.getElementById("pwcheck").innerHTML =
                        "비밀번호 일치";
                    }
                  }
                }}
              ></input>
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-2">이름</span>
              <span id="name" className="block fs-6 text-danger"></span>
            </div>
            <div className="login-input-wrap">
              <input
                type="text"
                maxLength="20"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  validateName(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <span className="fw-bold d-block mb-2">성별</span>
            <select
              className="form-select form-select mb-3"
              style={{ width: "465px" }}
            >
              <option defaultValue={0}>성별</option>
              <option value="1">남성</option>
              <option value="2">여성</option>
              <option value="3">선택 안함</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-2">이메일</span>
              {/* 인증되었습니다 초록글귀로 추가하기 */}
              <span id="email" className="block fs-6 text-danger"></span>
            </div>

            <div className="login-input-wrap d-flex">
              <input
                type="email"
                maxLength="20"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <button
                className="btn btn-primary w-50 px-2"
                onClick={(e) => {
                  validateEmail(email);
                }}
              >
                인증번호 받기
              </button>
            </div>
            <span id="email2" className="text-success"></span>
          </div>
          <div className="mb-5">
            <div className="d-flex gap-2">
              <span className="fw-bold d-block mb-2">
                휴대전화( - 빼고 입력)
              </span>
              <span id="tel" className="block fs-6 text-danger"></span>
            </div>
            <div className="login-input-wrap d-flex">
              <input
                type="tel"
                maxLength="20"
                value={tel}
                onChange={(e) => {
                  setTel(e.target.value);
                  validateTel(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="login-button-wrap">
            <button type="submit" className="rounded" onClick={joincheck}>
              가입하기
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Join;
