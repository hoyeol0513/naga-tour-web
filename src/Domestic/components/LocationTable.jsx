import React from "react";

const LocationTable = () => {
  return (
    <div>
      <nav style={{ marginTop: "100px", textAlign: "center" }}>
        <ul
          style={{
            backgroundColor: "#afafaf",
            display: "inline-block",
            padding: "0 20px",
            borderRadius: "10px",
          }}
        >
          <li style={{ display: "inline-block", width: "180px" }}>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              서울
            </a>
          </li>
          <li style={{ display: "inline-block", width: "180px" }}>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              경기
            </a>
          </li>
          <li style={{ display: "inline-block", width: "180px" }}>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              대전
            </a>
          </li>
          <li style={{ display: "inline-block", width: "180px" }}>
            <a style={{ color: "inherit", textDecoration: "none" }} href="#">
              부산
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LocationTable;
