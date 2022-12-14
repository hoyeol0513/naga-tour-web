import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import DomMetaTag from "./DomMetaTag";
import Styles from "../css/style.css";

const DomLodSlick = ({ CityCode }) => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    fade: true,
    cssEase: "linear",
  };

  const [imageno, setImageNo] = useState(0);
  const [lod, setLod] = useState([]);
  const [loading, setLoading] = useState(true);

  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  function randomNumberInRange(index) {
    return Math.floor(Math.random() * index * 0.02);
  }
  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchStay?serviceKey=${servicekey}&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&areaCode=1&hanOk=0`
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
          `https://apis.data.go.kr/B551011/KorService/searchStay?serviceKey=${servicekey}&numOfRows=10&pageNo=${imageno}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&hanOk=0`
        );

        setLod(response.data.response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    changeImage();
  }, [imageno]);

  // useEffect(() => {
  //   async function changeImage() {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         `https://apis.data.go.kr/B551011/KorService/searchStay?serviceKey=${servicekey}&numOfRows=10&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&areaCode=${CityCode}`
  //       );
  //       setLod(response.data.response.body.items.item);
  //       console.log("lod changed", lod);
  //       console.log(CityCode);
  //       console.log("--------------------------");
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   changeImage();
  // }, [CityCode, imageno]);

  return (
    <div>
      <DomMetaTag />
      <div className="border border-top-0">
        <div>
          <h6 className="text-center text-primary mb-0 pt-5" id="KOTRALEAP">
            Accommodation information
          </h6>
          <h1
            className="text-dark font-weight-bold text-center pb-3"
            id="KOTRALEAP"
          >
            ?????? ??????
          </h1>
          {loading ? (
            <div className="text-center">loading...</div>
          ) : (
            <Slider {...settings}>
              {lod &&
                lod.map((v, index) => {
                  //????????? ????????? (return??? false??? ???????????? ????????? ??????)
                  return (
                    v.firstimage && (
                      <div
                        key={index}
                        className="d-flex  text-center justify-content-center pb-5"
                        id="KOTRALEAP"
                      >
                        <img
                          object-fit="fill"
                          src={v.firstimage}
                          width="480px"
                          height="480px"
                          alt="?????????"
                          background-size="cover"
                          className="shadow-lg bg-body rounded"
                        />

                        <div>
                          <div className="team card position-relative">
                            <div className="card-body text-center p-0">
                              <div
                                className=" lodText bg-white flex-wrap shadow bg-body rounded d-flex flex-column align-items-center justify-content-center"
                                style={{
                                  width: "480px",
                                  height: "480px",
                                }}
                              >
                                <h1 className="font-weight-bold mb-4">
                                  {v.title}
                                </h1>
                                <span className="text-secondary">
                                  <i className="fi fi-sr-marker mx-1 "></i>
                                  {v.addr1} {v.addr2}
                                </span>

                                <a
                                  href={`/single/${v.contentid}/${v.contenttypeid}`}
                                  alt="????????????"
                                  className="text-primary"
                                  target="_blank"
                                >
                                  ????????????
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
    </div>
  );
};

export default DomLodSlick;
