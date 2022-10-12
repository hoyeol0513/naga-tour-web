import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DomMetaTag from "./DomMetaTag";
import DomNavBar from "./DomNavBar";
const MyPages = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    axios
      .get("api/sbb")
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <DomMetaTag />
      <DomNavBar />
      <table className="table">
        <thead>
          <tr>
            <td scope="col">#</td>
            <td></td>
            <td scope="col">이름</td>
            <td scope="col">주소</td>
            <td scope="col">전화번호</td>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((data, index) => (
            <tr className="">
              <td
                className="col-1 text-center"
                key={index}
                style={{ alignItems: "center" }}
              >
                {data.id}
              </td>
              <td className="col-1">
                <img
                  src={data.img}
                  style={{ width: "200px", height: "200px" }}
                />
              </td>
              <td className="col-5 text-center">
                <h3>{data.title}</h3>
              </td>
              <td className="col-2">{data.addr1}</td>
              <td className="col-1">{data.tel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPages;
