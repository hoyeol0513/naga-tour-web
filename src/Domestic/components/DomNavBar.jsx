import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import DomMetaTag from "./DomMetaTag";
import { useEffect } from "react";

const DomNavBar = () => {
  const [select, setSelect] = useState(12);
  const [data, setData] = useState("");
  const [login, setLogin] = useState("");
  const Navigate = useNavigate();
  const location = useLocation();
  const onChangeSelect = (e) => {
    setSelect(e.target.value);
  };

  const onChangeText = (e) => {
    setData(e.target.value);
  };

  const userLogin = () => {
    setLogin(localStorage.getItem("user_id"));
  };

  useEffect(() => {
    userLogin();
    if (
      sessionStorage.getItem("navValue") !== null &&
      sessionStorage.getItem("navSelect") !== null
    ) {
      document.getElementById("navSelect").value =
        sessionStorage.getItem("navSelect");
      document.getElementById("navValue").value =
        sessionStorage.getItem("navValue");

      setSelect(sessionStorage.getItem("navSelect"));
      setData(sessionStorage.getItem("navValue"));
    }
  }, []);

  useEffect(() => {
    setLogin(localStorage.getItem("user_id"));
  }, [localStorage.getItem("user_id")]);
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
              <form
                className="w-100"
                onSubmit={() => {
                  if (data.trim() !== "") {
                    sessionStorage.setItem(
                      "navValue",
                      document.getElementById("navValue").value
                    );
                    sessionStorage.setItem(
                      "navSelect",
                      document.getElementById("navSelect").value
                    );
                    Navigate(`/list/${select}/${data}`);
                  }
                }}
              >
                <div className="input-group w-75">
                  <div className="d-inline-flex">
                    <select
                      id="navSelect"
                      className="d-inline-flex form-select"
                      aria-label="Default select example"
                      value={data.select}
                      onChange={onChangeSelect}
                    >
                      <option value="12">관광</option>
                      <option value="14">문화</option>
                      <option value="15">축제</option>
                      <option value="32">숙박</option>
                      <option value="39">음식</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    id="navValue"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    value={data.text}
                    onChange={onChangeText}
                  />
                  <button className="btn btn-outline-secondary">검색</button>
                </div>
              </form>
            </div>
            {login === null ? (

              <div className="d-flex gap-1">
                <Link
                  to="/Login"
                  className="btn btn-white py-2 px-2 d-none d-lg-block"
                >
                  SIGN IN
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-White py-2 px-4 d-none d-lg-block"
                >
                  SIGN UP
                </Link>
              </div>
              <div className="d-flex gap-2">
                <ul
                  classMenu="subMenu"
                  style={{ listStyle: "none", margin: "0", padding: "0" }}
                >
                  <li>
                    <Link
                      to="/Login"
                      className="btn btn-white mt-2 py-3 px-4 d-none d-lg-block"
                    >
                      LOGIN
                    </Link>
                  </li>
                  <ul className="subMenu2">
                    <li>테스트아이템1</li>
                    <li>테스트아이템2</li>
                  </ul>
                </ul>
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <Link
                    to="/signup"
                    className="btn btn-White mt-2 py-3 px-4 d-none d-lg-block"
                  >
                    SIGNUP
                  </Link>
                </ul>
              
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link
                  to="/mypage"
                  className="btn btn-white py-2 px-4 d-none d-lg-block"
                >
                  MYPAGE
                </Link>
                <Link
                  to="/"
                  className="btn btn-White py-2 px-4 d-none d-lg-block"
                  onClick={() => {
                    alert("로그아웃 되었습니다");
                    localStorage.clear();
                  }}
                >
                  LOGOUT
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DomNavBar;
