import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DomNavBar from "./components/DomNavBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import DomMetaTag from "./components/DomMetaTag";
import DomFooter from "./components/DomFooter";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";
import Styles from "./css/style.css";
const Single = () => {
  const { contentid, contenttypeid } = useParams();
  const [array, setArray] = useState([]);
  const [title, setTitle] = useState("");
  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";

  function NaverMapComponent() {
    return (
      <NaverMap
        className="shadow bg-body rounded"
        mapDivId={"react-naver-map"}
        style={{
          width: "100%",
          height: "30vh",
          marginBottom: "10px",
          marginTop: "10px",
          border: "solid rgba(0,0,0,0.1) 2px",
        }}
        defaultCenter={{ lat: array[0].mapy, lng: array[0].mapx }}
        defaultZoom={16}
      >
        <Marker
          key={1}
          position={{ lat: array[0].mapy, lng: array[0].mapx }}
          animation={2}
        />
      </NaverMap>
    );
  }
  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios.get(`
    https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=${servicekey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentid}&contentTypeId=${contenttypeid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`);
        setArray(response.data.response.body.items.item);
        setTitle(response.data.response.body.items.item[0].title);
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, []);

  return (
    <div>
      <DomNavBar />
      <DomMetaTag />
      <head>
        <Helmet>
          <title>당신의 여행 도우미 NAGA | {title}</title>
        </Helmet>
      </head>
      <body>
        {array.map((v) => (
          <div>
            <div
              className="jumbotron jumbotron-fluid mb-5"
              style={{
                backgroundSize: "100%",
              }}
            >
              <div className="container text-center py-5">
                <h2 className="text-white display-4"></h2>

                <div className="mx-auto">
                  <div className="input-group">
                    <div className="input-group-append"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="text-center text-primary" id="KOTRALEAP">
                Detailed information
              </h6>
              <h1
                className="text-dark font-weight-bold text-center pb-3 border border-top-0 border-left-0 border-right-0"
                id="KOTRALEAP"
              >
                상세 정보
              </h1>
            </div>
            <div
              className="d-flex justify-content-center mx-auto"
              style={{
                backgroundColor: "rgba(0,0,0,0.2)",
                width: "1200px",
                borderRadius: "30px",
                padding: "20px",
              }}
            >
              <img
                className="shadow-lg bg-body rounded"
                src={v.firstimage}
                style={{
                  marginRight: "10px",
                  width: "500px",
                  height: "600px",
                  marginBottom: "50px",
                }}
              ></img>
              <div
                style={{
                  width: "500px",
                }}
              >
                <h2
                  id="KOTRALEAP"
                  style={{
                    width: "500px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "auto",
                  }}
                >
                  {v.title}
                </h2>

                <div
                  style={{
                    height: "150px",
                    overflow: "auto",
                  }}
                >
                  {v.overview}
                </div>

                <RenderAfterNavermapsLoaded
                  ncpClientId={`22kbpv25ll`}
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading..</p>}
                >
                  <NaverMapComponent />
                </RenderAfterNavermapsLoaded>
                <div className="text-secondary d-flex justify-content-end">
                  주소 : {v.addr1}
                </div>
                <div className="text-secondary d-flex justify-content-end">
                  tel : {v.tel}
                </div>
                <button type="button" className="btn btn-primary">
                  위시리스트에 저장
                </button>
              </div>
            </div>
          </div>
        ))}
      </body>
      <footer>
        <DomFooter />
      </footer>
    </div>
  );
};

export default Single;
