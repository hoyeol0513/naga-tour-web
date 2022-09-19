import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";
import Rent from "../json/전국렌터카업체정보표준데이터.json";
const DomRentSlick = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "300px",
  };

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <DomMetaTag />
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
        ></link>
      </Helmet>

      <div>
        <h6 className="text-center text-primary mb-0 pt-5" id="KOTRALEAP">
          Rent information
        </h6>
        <h1
          className="text-dark font-weight-bold text-center pb-3"
          id="KOTRALEAP"
        >
          렌트 정보
        </h1>
        <Slider {...settings}>
          {Rent.records.map((v, index) => {
            //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
            return (
              v.차고지도로명주소 && (
                <div
                  className="d-flex flex flex-column text-center"
                  id="KOTRALEAP"
                  style={{
                    padding: "500px",
                  }}
                >
                  <div style={{ width: "1240px" }}>
                    <div className="team card position-relative border-start mb-5">
                      <div className="card-body text-center p-0">
                        <div className="d-flex flex-column justify-content-center bg-white flex-wrap shadow bg-body rounded ">
                          <h5 className="font-weight-bold fs-2 mb-0">
                            {v.업체명}
                          </h5>
                          {/* <span className="text-secondary fs-5 mb-2">
                            {v.eventstartdate} ~ {v.eventenddate}
                          </span>
                          <span className="text-secondary">{v.addr1}</span> */}
                          <span className="text-secondary">
                            {v.차고지도로명주소}
                          </span>
                          <span className="text-secondary">
                            {v.평일운영시작시각} ~ {v.평일운영종료시각}
                          </span>
                          <span className="text-secondary">
                            <i class="fi fi-sr-phone-call mx-2 "></i>
                            {v.전화번호}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DomRentSlick;
