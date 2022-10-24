import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DomNavBar from "./components/DomNavBar";
import { useNavigate, useParams } from "react-router-dom";
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
  const [wishLen, setWishLen] = useState(0);
  const [userid, setUserid] = useState("");
  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  const Navi = useNavigate();

  const getUser = () => {
    setUserid(localStorage.getItem("user_id"));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setUserid(localStorage.getItem("user_id"));
  }, [localStorage.getItem("user_id")]);

  function NaverMapComponent() {
    return (
      <NaverMap
        className="shadow bg-body rounded"
        mapDivId={"react-naver-map"}
        style={{
          width: "100%",
          height: "335px",
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

  useEffect(() => {
    if (array.length !== 0) {
      async function getItem() {
        await axios
          .get(`/api/item`, {
            params: {
              contentid: `${array[0].contentid}`,
              userId: userid,
            },
          })
          .then((res) => {
            setWishLen(res.data.length);
          });
      }
      getItem();
    }
  }, [array]);

  async function getItem() {
    await axios
      .get(`/api/item`, {
        params: {
          contentid: `${array[0].contentid}`,
          userId: userid,
        },
      })
      .then((res) => {
        setWishLen(res.data.length);
      });
  }

  const wishCreate = async () => {
    if (userid !== null) {
      await axios.get("/api/create", {
        params: {
          title: `${array[0].title}`.replace("[", " ").replace("]", " "),
          addr1: `${array[0].addr1}`,
          img: `${array[0].firstimage}`,
          tel: `${array[0].tel}`,
          contentid: `${array[0].contentid}`,
          contenttypeid: `${array[0].contenttypeid}`,
          userId: userid,
        },
      });
      alert("위시리스트에 저장되었습니다.");
      getItem();
    } else {
      alert("로그인을 해주세요");
      Navi(`/login`);
    }
  };

  function deleteWish() {
    if (userid !== null) {
      axios.get(`/api/delete`, {
        params: {
          contentid: `${array[0].contentid}`,
          userId: userid,
        },
      });
      alert("위시리스트에서 삭제되었습니다.");
      getItem();
    } else {
      alert("로그인을 해주세요");
      Navi(`/login`);
    }
  }

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
            <div>
              <h1
                className="text-dark font-weight-bold text-center pt-5 pb-2 d-flex mx-auto justify-content-center"
                id="KOTRALEAP"
                style={{
                  width: "1200px",
                }}
              >
                {v.title}
              </h1>
            </div>
            <div
              className="d-flex justify-content-center mx-auto"
              style={{
                width: "1200px",
                borderRadius: "30px",
              }}
            >
              <img
                className="shadow-lg bg-body rounded"
                src={v.firstimage}
                style={{
                  marginRight: "10px",
                  width: "600px",
                  height: "700px",
                  marginBottom: "50px",
                }}
              ></img>
              <div
                style={{
                  width: "500px",
                }}
              >
                <div
                  style={{
                    height: "250px",
                    overflow: "auto",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "5px",
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
                <div className="text-secondary d-flex justify-content-end pb-2">
                  tel : {v.tel}
                </div>
                <div className="d-flex justify-content-center">
                  {wishLen > 0 ? (
                    <button
                      type="button"
                      className="btn btn-block btn-danger"
                      method="post"
                      onClick={deleteWish}
                    >
                      위시리스트 삭제
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-block btn-primary "
                      onClick={wishCreate}
                      method="post"
                    >
                      위시리스트 저장
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </body>
      <DomFooter />
    </div>
  );
};

export default Single;
