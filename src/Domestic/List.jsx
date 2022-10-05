import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DomNavBar from "./components/DomNavBar";
import DomFooter from "./components/DomFooter";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const List = () => {
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(0);

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
        setArrayLength(Math.round(array.length / 10));
      } catch (error) {
        console.log(error);
      }
    }
    getImage();
  }, []);
  return (
    <>
      <DomNavBar />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | List</title>
      </Helmet>
      <button
        onClick={() => {
          console.log("길이는", arrayLength);
          console.log(array);
        }}
      >
        확인
      </button>
      <div className="container py-5">
        {array ? (
          array.map((v, index) => {
            return (
              <div className="row">
                <div className="col-lg-4">
                  <div className="row">
                    <Link
                      to={`/single/${v.contentid}/${v.contenttypeid}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="col-md-12 mb-3">
                        <div className="mb-3 border shadow">
                          <div className="d-flex">
                            {v.firstimage ? (
                              <img
                                src={v.firstimage}
                                style={{ width: "100px", height: "100px" }}
                                alt="이미지"
                              ></img>
                            ) : (
                              <div
                                style={{ width: "100px", height: "100px" }}
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
                              <p>{v.addr1}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
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

      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      <DomFooter />
    </>
  );
};

export default List;
