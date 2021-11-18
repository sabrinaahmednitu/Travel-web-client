import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-style py-5">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h1>CLOUDE TRAVEL</h1>
                            <p>
                                "Money can't buy happiness." <br /> Successful
                                people realize that events are often random
                            </p>
                           
                        </div>
                    </Col>

                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">RECENT POSTS</h2>
                            <div>
                                <span>Standard Blog Post With Image</span>
                            </div>
                            <div>
                                <span>Amazing Fullwidth Post</span>
                            </div>
                            <div>
                                <span>Link Post</span>
                            </div>
                            <div>
                                <span>Quote Post</span>
                            </div>
                            <div>
                                <span>Sidebar Post With Slideshow</span>
                            </div>
                            
                        </div>
                    </Col>


                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">ANOTHER SITE</h2>
                            <div className="footer-icon">
                                 <i className="fab fa-instagram"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-twitter-square"></i>
                                
                               
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">CONTACT INFO</h2>
                            <div>
                                <span>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</span>
                            </div>
                            <div className="my-2">
                                <span>345-677-554</span>
                            </div>
                            <div>
                                 <span>323-678-567</span>
                            </div>
                            <div className="mt-2">
                                <span>info@cloudetravel.com</span>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={12} className="my-3">
                    <p className="copyright" >All copyrights reserved © 2021 - Designed & Developed by sabrina ahmed nitu</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
