import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";

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
  };

  const [loading, setLoading] = useState(true);
  const [rent, setRent] = useState([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    async function setData() {
      try {
        const response = await axios.get(
          `http://api.data.go.kr/openapi/tn_pubr_public_car_rental_api?serviceKey=LC%2BRTwuYWh6OgZC1AKhzWtyfTV%2B6Lc1qQZ5l05usRdo4nEetPUt44I2K6dW877MiDjxUj00bsNjD223dti6BwQ%3D%3D&pageNo=0&numOfRows=5000&type=json`
        );
        console.log(response.data.response.body.items);
        setRent(response.data.response.body.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    setData();
  }, []);
  return (
    <div>
      <DomMetaTag />

      <div>
        <h6 className="text-center text-primary mb-0 pt-5" id="KOTRALEAP">
          Event information
        </h6>
        <h1
          className="text-dark font-weight-bold text-center pb-3"
          id="KOTRALEAP"
        >
          행사 정보
        </h1>
        <Slider {...settings}>
          {rent.map((v, index) => {
            //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
            return (
              <div
                className="d-flex flex flex-row text-center"
                id="KOTRALEAP"
                style={{
                  padding: "500px",
                }}
              >
                <div>
                  <div className="team card position-relative border-start mb-5 ">
                    <div className="card-body text-center p-0 ">
                      <div
                        className=" bg-white flex-wrap shadow bg-body rounded d-flex flex-column align-items-center justify-content-center"
                        style={{ width: "720px", height: "480px" }}
                      >
                        <h1 className="font-weight-bold mb-0">{v.entrpsNm}</h1>

                        <span className="text-secondary">{v.garageLnmadr}</span>
                        <span className="text-secondary">{v.rdnmadr}</span>

                        <a href="# " alt="이동하기" className="text-primary">
                          바로가기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DomRentSlick;
