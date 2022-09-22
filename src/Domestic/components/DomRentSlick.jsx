import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";
import LocationTable from "./LocationTable";

const DomRentSlick = ({si}) => {
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
          Rent Car information
        </h6>
        <h1
          className="text-dark font-weight-bold text-center pb-3"
          id="KOTRALEAP"
        >
          렌트카 정보
        </h1>
        <LocationTable si={si} />
        {loading ? (
          <div className="text-center">loading...</div>
        ) : (
          <Slider {...settings}>
            {rent.map((v, index) => {
              //렌트카 지역을 위한 지역 설정
              let area = (v.rdnmadr !== null ? v.rdnmadr : v.lnmadr).split(
                " "
              )[0];

              //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
              return (
                (v.rdnmadr || v.lnmadr) &&
                (v.rdnmadr.split(" ")[0] === "부산광역시" ||
                  v.lnmadr.split(" ")[0] === "부산광역시") && (
                  <div
                    className="d-flex flex flex-column text-center"
                    id="KOTRALEAP"
                    style={{
                      padding: "500px",
                    }}
                  >
                    <div
                      style={{
                        width: "1024px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <div className="team card position-relative border-start mb-5">
                        <div className="card-body text-center p-0">
                          <div className="d-flex flex-column justify-content-center bg-white flex-wrap shadow bg-body rounded ">
                            <h5 className="font-weight-bold fs-2 mb-2">
                              {v.entrpsNm}
                            </h5>

                            <span className="text-secondary">
                              <i class="fi fi-sr-marker mx-1 "></i>
                              {v.rdnmadr !== "" ? v.rdnmadr : v.lnmadr}
                            </span>

                            <span className="text-secondary">
                              <i class="fi fi-ss-time-quarter-to mx-2"></i>
                              {v.weekdayOperOpenHhmm} ~ {v.weekdayOperColseHhmm}
                            </span>
                            <span className="text-secondary">
                              <i class="fi fi-sr-phone-call mx-2 "></i>
                              {v.phoneNumber}
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
        )}
      </div>
    </div>
  );
};

export default DomRentSlick;
