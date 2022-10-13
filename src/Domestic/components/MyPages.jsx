import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DomMetaTag from "./DomMetaTag";
import DomNavBar from "./DomNavBar";
import Styles from "../css/style.css";
import { useNavigate } from "react-router-dom";
import DomFooter from "./DomFooter";
import { Helmet } from "react-helmet-async";
const MyPages = () => {
  const [wishlist, setWishlist] = useState([]);

  const pageClick = useNavigate();
  useEffect(() => {
    axios
      .get("api/items")
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header>
        <Helmet>
          <title>당신의 여행 도우미 NAGA | MYPAGE</title>
        </Helmet>
      </header>
      <DomMetaTag />
      <DomNavBar />

      <table className="table">
        <thead>
          <tr className="text-center table-secondary">
            <td scope="col">#</td>
            <td></td>
            <td scope="col">이름</td>
            <td scope="col">주소</td>
            <td scope="col">전화번호</td>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((data, index) => (
            <tr
              style={{ cursor: "pointer" }}
              className="click"
              onClick={() => {
                pageClick(`single/${data.contentid}/${data.contenttypeid}`);
              }}
            >
              <td
                className="text-center col-1 table-secondary"
                key={index}
                style={{ verticalAlign: "middle" }}
              >
                <h1 className="text-secondary">{data.id}</h1>
              </td>
              <td className="col-1">
                <img
                  src={data.img}
                  style={{ width: "200px", height: "200px" }}
                />
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                <h3>{data.title}</h3>
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {data.addr1}
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {data.tel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DomFooter />
    </div>
  );
};

export default MyPages;
