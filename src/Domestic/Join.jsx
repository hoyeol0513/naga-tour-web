import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Loginpage.css";
import Logo from "./img/logo.png";

const Join = () => {
  const Navi = useNavigate();
  // 아이디, 비밀번호, 비밀번호 확인, 이메일, 전화번호 저장 & 확인
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tell, setTell] = useState("");
  const [code, setCode] = useState("");
  const [codecheck, setCodecheck] = useState("");
  const [isSent, setIsSent] = useState(false);

  // 오류메시지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [tellMessage, setTellMessage] = useState("");

  // 오류메시지 상태
  const [idColor, setIdColor] = useState("red");
  const [pwColor, setPwColor] = useState("red");
  const [pwcheckColor, setPwcheckColor] = useState("red");
  const [nameColor, setNameColor] = useState("red");
  const [emailColor, setEmailColor] = useState("red");
  const [telColor, setTelColor] = useState("red");

  //회원가입 버튼 상태
  const [suColor, setSuColor] = useState("red");

  const onChangeId = (e) => {
    const IdRegex = /^[A-Za-z]{3,19}[0-9]{1,}$/;
    const Idcurrent = e.target.value;
    setId(e.target.value);
    if (!IdRegex.test(Idcurrent)) {
      setIdColor("red");
      setIdMessage("알파벳과 숫자로 이루어진 4글자 이상으로 입력해주세요. ");
    } else {
      setIdColor("green");
      setIdMessage("✔️아이디 확인");
      setId(e.target.value);
    }
  };

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPwColor("red");
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요"
      );
      document.getElementById("repassword").ariaDisabled = false;
    } else {
      setPwColor("green");
      setPasswordMessage("✔️안전한 비밀번호입니다.");
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
    if (
      password === passwordConfirmCurrent &&
      passwordConfirmCurrent.length !== 0
    ) {
      setPwcheckColor("green");
      setPasswordConfirmMessage("✔️비밀번호가 일치합니다.");
    } else {
      setPwcheckColor("red");
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const onChangeName = (e) => {
    const NameRex = /^[가-힣]{2,}$/;
    const NameCurrent = e.target.value;
    setName(NameCurrent);
    if (!NameRex.test(NameCurrent)) {
      setNameColor("red");
      setNameMessage("이름을 입력해주세요");
    } else {
      setNameColor("green");
      setNameMessage("✔️확인되었습니다.");
      setName(NameCurrent);
    }
  };

  const onChangeEmailId = (e) => {
    const EmailRegex =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{3,}$/;
    const EmailCurrent = e.target.value;
    setEmail(EmailCurrent);
    if (!EmailRegex.test(EmailCurrent)) {
      setEmailColor("red");
      setEmailMessage("이메일 주소를 다시 확인 부탁드립니다.");
    } else {
      setEmailColor("green");
      setEmailMessage("인증번호 받기를 해주세요.");
      setEmail(EmailCurrent);
    }
  };

  const onChangePhoneNumber = (e) => {
    const TellRex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    const currentTell = e.target.value;
    setTell(currentTell);
    if (!TellRex.test(currentTell)) {
      setTelColor("red");
      setTellMessage("전화번호를 입력해주세요");
    } else {
      setTelColor("green");
      setTell(currentTell);
      setTellMessage("✔️확인되었습니다.");
    }
  };

  useEffect(() => {
    if (
      idColor === "green" &&
      pwColor === "green" &&
      pwcheckColor === "green" &&
      nameColor === "green" &&
      emailColor === "green" &&
      telColor === "green" &&
      code === codecheck
    ) {
      setSuColor("blue");
    } else {
      setSuColor("red");
    }
  }, [
    idColor,
    pwColor,
    pwcheckColor,
    nameColor,
    emailColor,
    telColor,
    code,
    codecheck,
  ]);

  const CreateUser = () => {
    if (
      idColor === "green" &&
      pwColor === "green" &&
      pwcheckColor === "green" &&
      nameColor === "green" &&
      emailColor === "green" &&
      telColor === "green" &&
      code === codecheck
    ) {
      axios.get(`/user/create`, {
        params: {
          userid: id,
          password: password,
          username: name,
          email: email,
          tel: tell,
        },
      });
      alert("생성완료");
      Navi(`/`);
    } else {
      alert("생성실패");
    }
  };
  const ValidateEmail = async () => {
    alert("전송되었습니다");
    const data = await axios.get(`/mail`, {
      params: {
        email,
      },
    });
    setCodecheck(data.data);
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
          <div className="mb-4">
            <span className="fw-bold d-block mb-1">아이디</span>
            <div className="login-input-wrap">
              <input id="id" onChange={onChangeId} type="text" maxlength="20" />
              {id.length > 0 && idColor === "red" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {idMessage}
                </span>
              ) : id.length > 0 && idColor === "green" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  {idMessage}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-1">비밀번호</span>
            <div className="login-input-wrap">
              <input
                id="password"
                onChange={onChangePassword}
                type="password"
                maxlength="20"
              />
              {password.length > 0 && pwColor === "red" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {passwordMessage}
                </span>
              ) : pwColor === "green" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  {passwordMessage}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-1">비밀번호 재확인</span>
            <div className="login-input-wrap">
              <input
                id="repassword"
                onChange={onChangePasswordConfirm}
                type="password"
                maxlength="20"
              ></input>
              {passwordConfirm.length > 0 && pwcheckColor === "red" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {passwordConfirmMessage}
                </span>
              ) : pwcheckColor === "green" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  {passwordConfirmMessage}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-4">
            <span className="fw-bold d-block mb-1">이름</span>
            <div className="login-input-wrap">
              <input
                id="userName"
                onChange={onChangeName}
                type="text"
                maxlength="20"
              ></input>
              {name.length > 0 && nameColor === "red" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {nameMessage}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="d-flex">
              <span className="fw-bold d-block mb-1">이메일</span>
              {email.length > 0 && emailColor === "red" ? (
                <span
                  className="ml-2 mt-1"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {emailMessage}
                </span>
              ) : (
                <span
                  className=" ml-2 mt-1"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  {emailMessage}
                </span>
              )}
            </div>
            <div>
              <div className="login-input-wrap d-flex">
                <input
                  id="userID"
                  onChange={onChangeEmailId}
                  type="text"
                  maxlength="20"
                ></input>
                <button
                  className="btn btn-primary btn-block w-50 px-1 "
                  onClick={() => {
                    if (emailColor === "green" && email !== "") {
                      ValidateEmail();
                      setIsSent(true);
                    }
                  }}
                >
                  인증번호 받기
                </button>
              </div>
            </div>

            <div>
              <div>
                <div className="login-input-wrap mt-1">
                  <input
                    type="text"
                    placeholder="인증번호를 입력하세요"
                    disabled={!isSent}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                </div>
                {code !== "" ? (
                  <span
                    id="codecheck"
                    className={`${
                      code === codecheck ? "text-success" : "text-danger"
                    }`}
                  >
                    {`${code === codecheck ? "✔️" : "✖️"} 인증`}
                  </span>
                ) : null}
              </div>
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
              {tell.length > 0 && telColor === "red" ? (
                <span
                  className="d-block mt-2"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  {tellMessage}
                </span>
              ) : (
                <span
                  className="d-flex mt-2"
                  style={{ color: "green", fontSize: "12px" }}
                >
                  {tellMessage}
                </span>
              )}
            </div>
          </div>

          {suColor === "red" ? (
            <div className="login-button-red mb-5">
              <button onClick={CreateUser}>Sign Up</button>
            </div>
          ) : (
            <div className="login-button-wrap mb-5">
              <button onClick={CreateUser}>Sign Up</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Join;
