import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DomMetaTag from "./components/DomMetaTag";
import axios from "axios";
import "bootstrap/js/src/collapse.js";
import DomFestivalSlick from "./components/DomFestivalSlick";
import DomLodSlick from "./components/DomLodSlick";
import DomFooter from "./components/DomFooter";
import DomNavBar from "./components/DomNavBar";
import Wording from "./components/Wording";

const DomMain = () => {
  const [si, setSi] = useState([]);
  const [city, setCity] = useState("");
  const [cityCode, setCityCode] = useState(1);

  const servicekey =
    "%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D";
  useEffect(() => {
    async function getSi() {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${servicekey}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`
        );

        setSi(response.data.response.body.items.item);
      } catch (error) {
        console.log(error);
      }
    }
    getSi();
  }, []);

  return (
    <div>
      <DomMetaTag />
      <Helmet>
        <title>당신의 여행 도우미 NAGA | HOME</title>
      </Helmet>

      <DomNavBar />

      <DomFestivalSlick CityCode={cityCode} />

      <DomLodSlick CityCode={cityCode} />

      <section className="py-5">
        <div className="container px-5 my-2 px-5">
          <div className="text-center mb-4">
            <h1
              className="text-dark font-weight-bold text-center pb-3"
              id="phrase"
            >
              Today's travel phrase
            </h1>
            <p className="lead mb-0"></p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10">
              <div className="card mb-4">
                <Wording />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DomFooter />
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default DomMain;
