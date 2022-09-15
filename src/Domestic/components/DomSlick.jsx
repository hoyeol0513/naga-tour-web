import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
const DomSlick = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [imageno, setImageNo] = useState(0);
  const [festival, setFestival] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7B" +
    "DNb2XsBMcw%3D%3D";
  const startday = "20220913";

  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchFestival?serviceKey=${servicekey}&numOfRows=10&pageNo=10&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}"`
        );
        setImageNo(randomNumberInRange(response.data.response.body.totalCount));
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, []);

  //axios
  useEffect(() => {
    async function changeImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchFestival?serviceKey=${servicekey}&numOfRows=10&pageNo=${imageno}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}`
        );
        console.log(`imageno는 : `, imageno);
        console.log(response.data.response.body.items.item);
        setFestival(response.data.response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    changeImage();
  }, [imageno]);

  function randomNumberInRange(index) {
    return Math.floor(Math.random() * index * 0.02);
  }

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
      </Helmet>

      <div>
        <Slider {...settings}>
          {festival.map((v, index) => {
            //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
            return (
              v.firstimage && (
                <div className="d-flex justify-content-around flex-column ml-5 pl-5">
                  <a href="#">
                    <img
                      object-fit="fill"
                      src={v.firstimage}
                      width="380px"
                      height="500px"
                      alt="이미지"
                    />
                  </a>

                  <div style={{ width: "380px" }}>
                    <div className="team card position-relative border-0 mb-5">
                      <div className="card-body text-center p-0">
                        <div className="d-flex flex-column justify-content-center bg-white">
                          <h5 className="font-weight-bold">{v.title}</h5>
                          <span>{v.addr1}</span>
                          <span>{v.addr2}</span>
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

export default DomSlick;
