import React from "react";

const DomServiceMenu = () => {
  return (
    <div>
      <div className="container-fluid pt-5 ">
        <div className="container">
          <div className="text-center pb-2">
            <h6 className="text-primary  mb-0" id="KOTRALEAP">
              Our Services
            </h6>
            <h1 className="mb-4" id="KOTRALEAP">
              제공 서비스
            </h1>
          </div>
          <div className="row pb-3">
            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x fa-sharp pr-3 fa-solid fa-calendar-day"></i>
                <a href="#">
                  <h5 className="text-white font-weight-medium m-0">
                    Festival
                  </h5>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x text-dark pr-3 fa-solid fa-hotel"></i>
                <a href="#">
                  <h5 className="text-white font-weight-medium m-0">Lodging</h5>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i class="fa fa-2x text-dark fa-solid fa-car pr-3"></i>
                <a href="#">
                  <h5 className="text-white font-weight-medium m-0">
                    Transportation
                  </h5>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center mb-5">
              <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                <i className="fa fa-2x fa-store text-dark pr-3"></i>
                <a href="#">
                  <h5 className="text-white font-weight-medium m-0">
                    Restaurant
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomServiceMenu;
