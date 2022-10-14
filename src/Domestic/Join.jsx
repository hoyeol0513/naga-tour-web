import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Join = () => {
  const [toggle, setToggle] = useState(true);

  // 아이디, 비밀번호, 비밀번호 확인, 이메일, 전화번호 저장 & 확인
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [tellMessage, setTellMessage] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 12) {
      setIdMessage("4글자 이상 12글자 미만으로 입력해주세요.");
    } else {
      setIdMessage("");
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
    } else {
      setPasswordMessage("안전한 비밀번호에요");
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
    } else {
      setPasswordConfirmMessage("비밀번호가 틀렸습니다.");
    }
  };

  const onChangeName = (e) => {
    const NameRex = /^[가-힣]{2,}$/;
    const NameCurrent = e.target.value;
    if (!NameRex.test(NameCurrent)) {
      setNameMessage("이름을 입력해주세요");
    } else {
      setNameMessage("");
      setName(NameCurrent);
    }
  };

  const onChangeEmailId = (e) => {
    const EmailRegex =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{3,}$/;
    const EmailCurrent = e.target.value;
    if (!EmailRegex.test(EmailCurrent)) {
      setEmailMessage("이메일 주소를 다시 확인 부탁드립니다.");
    } else {
      setEmailMessage("인증번호 받기를 해주세요.");
      setEmail(EmailCurrent);
    }
  };

  const onChangePhoneNumber = (e) => {
    const currentTell = e.target.value;
    const TellRex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

    if (!TellRex.test(currentTell)) {
      setTellMessage("전화번호를 입력해주세요");
    } else {
      setTell(currentTell);
      setTellMessage("");
    }
  };

  return (
    <div className="main-container">
      <div className="main-wrap">
        <header>
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
              <input id="id" onChange={onChangeId} type="text" maxlength="20" />
              {id.length > 0 && (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {idMessage}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-2">비밀번호</span>
            <div className="login-input-wrap">
              <input
                id="password"
                onChange={onChangePassword}
                type="password"
                maxlength="20"
              />
              {password.length > 0 && (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {passwordMessage}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-2">비밀번호 재확인</span>
            <div className="login-input-wrap">
              <input
                id="repassword"
                onChange={onChangePasswordConfirm}
                type="password"
                maxlength="20"
              ></input>
              {passwordConfirm.length > 0 && (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {passwordConfirmMessage}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-2">이름</span>
            <div className="login-input-wrap">
              <input
                id="userName"
                onChange={onChangeName}
                type="text"
                maxlength="20"
              ></input>
              {name.length > 0 && (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {nameMessage}
                </span>
              )}
            </div>
          </div>
          <div className="mb-2">
            <span className="fw-bold d-block mb-2">이메일</span>
            <div>
              <div className="login-input-wrap d-flex">
                <input
                  id="userID"
                  onChange={onChangeEmailId}
                  type="text"
                  maxlength="20"
                ></input>
                <button className="btn btn-primary btn-block w-50 px-1 ">
                  인증번호 받기
                </button>
              </div>
              {email.length > 0 && (
                <span
                  className="d-block mt-1"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {emailMessage}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="mb-2 fw-bold d-block mb-2">휴대전화</span>
            <div className="login-input-wrap ">
              <input
                id="PhoneNumber"
                onChange={onChangePhoneNumber}
                className="d-flex"
                type="text"
                maxlength="20"
              ></input>
              {tell.length > 0 && (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {tellMessage}
                </span>
              )}
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
