import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";

const DomRentSlick = ({ CityName }) => {
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

        setRent(response.data.response.body.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    setData();
  }, []);
  return (
    <div className="border border-top-0">
      <DomMetaTag />
      <div>
        <h6 className="text-center text-primary mb-0 pt-5" id="KOTRALEAP">
          About Rent Car
        </h6>
        <h1
          className="text-dark font-weight-bold text-center pb-3"
          id="KOTRALEAP"
        >
          렌트카 정보
        </h1>
        {loading ? (
          <div className="text-center">loading...</div>
        ) : (
          <Slider {...settings}>
            {rent.map((v, index) => {
              //렌트카 지역을 위한 지역 설정
              let area = (v.rdnmadr !== "" ? v.rdnmadr : v.lnmadr).split(
                " "
              )[0];

              //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
              return (
                (v.rdnmadr || v.lnmadr) &&
                (v.rdnmadr.split(" ")[0].startsWith(CityName) ||
                  v.lnmadr.split(" ")[0].startsWith(CityName)) && (
                  <div
                    key={index}
                    className="d-flex flex flex-column text-center"
                    id="KOTRALEAP"
                    style={{
                      padding: "500px",
                    }}
                  >
                    <div
                      style={{
                        width: "100vh",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <div className="team card position-relative border-start mb-5">
                        <div className="card-body text-center p-0">
                          <div className="d-flex flex-column justify-content-center bg-white flex-wrap shadow bg-body rounded ">
                            <h5 className="font-weight-bold fs-2 mb-0">
                              {v.entrpsNm}
                            </h5>

                            {v.rdnmadr !== "" ? (
                              <span className="text-secondary">
                                {v.rdnmadr}
                              </span>
                            ) : (
                              <span className="text-secondary">{v.lnmadr}</span>
                            )}

                            <span className="text-secondary">
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
