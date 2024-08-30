import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DomMetaTag from "./DomMetaTag";
import DomNavBar from "./DomNavBar";
import { useNavigate } from "react-router-dom";
import DomFooter from "./DomFooter";
import { Helmet } from "react-helmet-async";
const MyPages = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userid, setUserid] = useState("");
  const pageClick = useNavigate();
  useEffect(() => {
    setUserid(localStorage.getItem("user_id"));
  }, []);

  useEffect(() => {
    axios
      .get("http://nagatourweb.shop:8081/api/user/item", {
        params: {
          userId: userid,
        },
      })
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => console.log(error));
  }, [userid]);
  return (
    <div>
      <header>
        <Helmet>
          <title>당신의 여행 도우미 NAGA | MYPAGE</title>
        </Helmet>
      </header>
      <DomMetaTag />
      <DomNavBar />

      <div className="d-flex">
        <table className="table">
          <thead>
            <tr className="text-center table-warning">
              <td scope="col">타입</td>
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
                  <h2 className="text-secondary">
                    {data.contenttypeid == "12"
                      ? "관광"
                      : data.contenttypeid == "14"
                      ? "문화"
                      : data.contenttypeid == "15"
                      ? "축제"
                      : data.contenttypeid == "32"
                      ? "숙박"
                      : "음식"}
                  </h2>
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
      </div>
      <DomFooter />
    </div>
  );
};

export default MyPages;
