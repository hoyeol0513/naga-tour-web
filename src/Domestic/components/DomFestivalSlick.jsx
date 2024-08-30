import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";

const DomFestivalSlick = ({ CityCode }) => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
  };

  const [imageno, setImageNo] = useState(0);
  const [festival, setFestival] = useState([]);
  const [loading, setLoading] = useState(true);
  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  const current = new Date();
  const month =
    `${current.getMonth() + 1}` <= 9
      ? "0" + `${current.getMonth() + 1}`
      : `${current.getMonth() + 1}`;
  const day =
    `${current.getDate()}` <= 9
      ? "0" + `${current.getDate() + 1}`
      : `${current.getDate() + 1}`;

  const date = `${current.getFullYear()}` + month + day;

  const startday = date;

  useEffect(() => {
    async function getImgNo() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${servicekey}&numOfRows=10&pageNo=10&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}"`
        );
        console.log(response);
        setImageNo(randomNumberInRange(response.data.response.body.totalCount));
      } catch (error) {
        console.log(error);
      }
    }
    getImgNo();
  }, []);

  //imgNo 들어간 요청
  useEffect(() => {
    async function changeImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${servicekey}&numOfRows=10&pageNo=${imageno}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&eventStartDate=${startday}`
        );
        setFestival(response.data.response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    changeImage();
  }, [imageno]);
  //city에 따른 요청
  useEffect(() => {
    async function changeImage() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService1/searchFestival1?serviceKey=${servicekey}&numOfRows=10&pageNo=$0&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&areaCode=${CityCode}&eventStartDate=${startday}`
        );
        setFestival(response.data.response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    changeImage();
  }, [CityCode]);

  function randomNumberInRange(index) {
    return Math.floor(Math.random() * index * 0.02);
  }

  return (
    <div>
      <DomMetaTag />

      <div className="border border-top-0">
        <h6 className="text-center text-primary mb-0 pt-5" id="KOTRALEAP">
          Event information
        </h6>
        <h1 className="text-dark font-weight-bold text-center" id="KOTRALEAP">
          행사 정보
        </h1>
        <h4
          className="text-secondary font-weight-bold text-center pb-3"
          id="KOTRALEAP"
        >
          기준 날짜: {new Date().toISOString().slice(0, 10)}
        </h4>
        {loading ? (
          <div className="text-center mb-5 mt-5">loading...</div>
        ) : (
          <Slider {...settings}>
            {festival &&
              festival.map((v, index) => {
                //조건부 랜더링 (return이 false면 랜더링이 안되는 개념)
                return (
                  v.firstimage && (
                    <div
                      key={index}
                      className="d-flex flex-column "
                      id="KOTRALEAP"
                    >
                      <img
                        object-fit="fill"
                        src={v.firstimage}
                        alt="이미지"
                        className="shadow-lg bg-body festival"
                      />

                      <div>
                        <div className="festival team card position-relative border-start mb-3">
                          <div className="card-body text-center p-0">
                            <div className="d-flex flex-column justify-content-center bg-white flex-wrap shadow bg-body  ">
                              <h5 className="font-weight-bold fs-2 mb-0">
                                {v.title}
                              </h5>
                              <span className="text-secondary fs-5 mb-2">
                                {v.eventstartdate} ~ {v.eventenddate}
                              </span>
                              <span className="text-secondary">
                                <i className="fi fi-sr-marker mx-1 "></i>
                                {v.addr1}
                              </span>
                              <a
                                href={`/single/${v.contentid}/${v.contenttypeid}`}
                              >
                                바로가기
                              </a>
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

export default DomFestivalSlick;
