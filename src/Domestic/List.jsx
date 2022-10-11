import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DomNavBar from "./components/DomNavBar";
import DomFooter from "./components/DomFooter";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const List = () => {
  const [array, setArray] = useState([]);
  const [si, setSi] = useState([]);
  const [city, setCity] = useState("");
  const [cityCode, setCityCode] = useState(0);

  const serviceKey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  const { keyword, contenttypeid } = useParams();

  useEffect(() => {
    console.log(keyword);
    console.log(contenttypeid);
    async function getImage() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&contentTypeId=${contenttypeid}&keyword=${keyword}`
        );
        setArray(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, []);

  useEffect(() => {
    async function getImage() {
      try {
        if (cityCode !== 0) {
          const response = await axios.get(
            `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&contentTypeId=${contenttypeid}&keyword=${keyword}&areaCode=${cityCode}`
          );
          setArray(response.data.response.body.items.item);
        }
        if (cityCode === 0) {
          const response = await axios.get(
            `https://apis.data.go.kr/B551011/KorService/searchKeyword?serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C&contentTypeId=${contenttypeid}&keyword=${keyword}`
          );
          setArray(response.data.response.body.items.item);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, [cityCode]);

  useEffect(() => {
    async function getSi() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService/areaCode?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`
        );

        setSi(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    }
    getSi();
  }, []);

  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("checkcitiy");

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }

    if (!checkThis.checked) {
      setCityCode(0);
      setCity("");
    }
  };

  return (
    <>
      <DomNavBar />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | {keyword}</title>
      </Helmet>

      {array ? (
        <h2 className=" ml-3 my-4">
          <span className="text-warning">{city}</span> 검색결과 :
          <span className="text-primary"> {keyword}</span> ({array.length} 개)
        </h2>
      ) : (
        <h2 className=" ml-3 my-4">
          <span className="text-warning">{city}</span> 검색결과 :
          <span className="text-primary">{keyword}</span> (0 개)
        </h2>
      )}
      <div className="d-flex">
        {/* City */}
        <div className="mt-5 ml-3 mt-lg-0">
          <div className="mb-5 border pt-2 pb-2">
            <h3 className="ml-3 mb-2">Cities</h3>

            <div
              style={{
                display: "inline-block",
                padding: "0 20px",
                borderRadius: "10px",
              }}
            >
              {si.map((v, index) => (
                <div className="form-check">
                  <input
                    onChange={(e) => {
                      checkOnlyOne(e.target);
                      if (v.code !== cityCode) {
                        setCityCode(v.code);
                        setCity(v.name);
                      }
                    }}
                    name="checkcitiy"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {v.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* search list */}
        <div className="container">
          <div className="row">
            {array ? (
              array.map((v, index) => {
                return (
                  <div className="col-lg-4">
                    <div className="row">
                      <Link
                        to={`/single/${v.contentid}/${v.contenttypeid}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div className="col-md-12 mb-3">
                          <div className="mb-3 border shadow">
                            <div className="d-flex itembox">
                              {v.firstimage ? (
                                <div className="imgbox">
                                  <img
                                    src={v.firstimage}
                                    style={{ width: "140px", height: "120px" }}
                                    alt="이미지"
                                    className="rounded-lg"
                                  ></img>
                                </div>
                              ) : (
                                <div
                                  className="notimg rounded-lg"
                                  style={{
                                    width: "140px",
                                    height: "120px",
                                    backgroundColor: "#fff",
                                  }}
                                ></div>
                              )}
                              <div className="ml-2 mt-1">
                                <div
                                  className="font-weight-bold mb-1"
                                  style={{
                                    width: "270px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {v.title}
                                </div>
                                <p
                                  style={{
                                    width: "250px",
                                    color: "rgba(128,128,128,1)",
                                  }}
                                >
                                  {v.addr1}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                결과가 존재하지 않습니다.
              </div>
            )}
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      <DomFooter />
    </>
  );
};

export default List;
