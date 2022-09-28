import React from 'react' 
import DomNavBar from './components/DomNavBar' 

const Price = () => {
    return (
        <>
    <DomNavBar/>

    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                <h1 className="mb-4">Affordable Pricing Packages</h1>
            </div>
            <div className="row">
                <div className="col-md-4 mb-5">
                    <div className="bg-secondary">
                        <div className="text-center p-4">
                            <h1 className="display-4 mb-0">
                                <small className="align-top text-muted font-weight-medium" style={{fontSize: "22px",  lineHeight: "45px"}}>$</small>49<small className="align-bottom text-muted font-weight-medium" style={{fontSize: "16px",  lineHeight:" 40px "}}>/Mo</small>
                            </h1>
                        </div>
                        <div className="bg-primary text-center p-4">
                            <h3 className="m-0">Basic</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center py-4">
                            <p>HTML5 & CSS3</p>
                            <p>Bootstrap 4</p>
                            <p>Responsive Layout</p>
                            <p>Compatible With All Browsers</p>
                            <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="bg-secondary">
                        <div className="text-center p-4">
                            <h1 className="display-4 mb-0">
                                <small className="align-top text-muted font-weight-medium" style={{fontSize: "22px",  lineHeight: "45px"}}>$</small>99<small className="align-bottom text-muted font-weight-medium" style={{fontSize: "16px",  lineHeight: "40px"}}>/Mo</small>
                            </h1>
                        </div>
                        <div className="bg-primary text-center p-4">
                            <h3 className="m-0">Premium</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center py-4">
                            <p>HTML5 & CSS3</p>
                            <p>Bootstrap 4</p>
                            <p>Responsive Layout</p>
                            <p>Compatible With All Browsers</p>
                            <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="bg-secondary">
                        <div className="text-center p-4">
                            <h1 className="display-4 mb-0">
                                <small className="align-top text-muted font-weight-medium" style={{fontSize: "22px",  lineHeight: "45px"}}>$</small>149<small className="align-bottom text-muted font-weight-medium" style={{fontSize: "16px",  lineHeight: "40px"}} >/Mo</small>
                            </h1>
                        </div>
                        <div className="bg-primary text-center p-4">
                            <h3 className="m-0">Business</h3>
                        </div>
                        <div className="d-flex flex-column align-items-center py-4">
                            <p>HTML5 & CSS3</p>
                            <p>Bootstrap 4</p>
                            <p>Responsive Layout</p>
                            <p>Compatible With All Browsers</p>
                            <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center pb-2">
                <h6 className="text-primary text-uppercase font-weight-bold">Testimonial</h6>
                <h1 className="mb-4">Our Clients Say</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
                <div className="position-relative bg-secondary p-4">
                    <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{top: "-6px",  right: "0" }}></i>
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{width: "60px",  height:" 60px "}} alt=""/>
                        <div className="ml-3">
                            <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div>
                <div className="position-relative bg-secondary p-4">
                    <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{top: "-6px",  right:" 0 "}}></i>
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style= {{width: "60px",  height:" 60px "}} alt=""/>
                        <div className="ml-3">
                            <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div>
                <div className="position-relative bg-secondary p-4">
                    <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{top: "-6px",  right:" 0 "}}></i>
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{width: "60px",  height:" 60px "}} alt=""/>
                        <div className="ml-3">
                            <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div>
                <div className="position-relative bg-secondary p-4">
                    <i className="fa fa-3x fa-quote-right text-primary position-absolute" style={{top: "-6px",  right:" 0 "}}></i>
                    <div className="d-flex align-items-center mb-3">
                        <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style = {{width: "60px",  height:" 60px "}} alt=""/>
                        <div className="ml-3">
                            <h6 className="font-weight-semi-bold m-0">Client Name</h6>
                            <small>- Profession</small>
                        </div>
                    </div>
                    <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-7 col-md-6">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Get In Touch</h3>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Pricing Plan</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-5">
                <h3 className="text-primary mb-4">Newsletter</h3>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{padding: "30px "}} placeholder="Your Email Address"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: "#3E3E4E !important "}}>
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy  <a href="#">Your Site Name</a>. All Rights Reserved. 
				Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
                <ul className="nav d-inline-flex">
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>
    ) 
} 

export default Price;