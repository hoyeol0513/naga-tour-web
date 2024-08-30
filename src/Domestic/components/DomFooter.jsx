import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-6">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>Hwagok 1st
                  Street, Seoul, Korea
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>02-345-6789
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>travel_info@naga.co.kr
                </p>
              </div>
              <div className="col-md-6 mb-5">
                <h3 className="text-primary mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-white mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-white mb-2" href="/mypage">
                    <i className="fa fa-angle-right mr-2"></i>My page
                  </a>
                  <div>
                    <a className="text-white mb-2" href="/signup">
                      <i className="fa fa-angle-right mr-2"></i>Sign Up
                    </a>
                    <span> / </span>
                    <a className="text-white mb-2" href="/Login">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 mb-5">
            <h3 className="text-primary mb-4">Newsletter</h3>
            <p>
              If you have any problmes, contact us with email, which mentioned
              in Get In Touch.
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Write down your problem."
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
