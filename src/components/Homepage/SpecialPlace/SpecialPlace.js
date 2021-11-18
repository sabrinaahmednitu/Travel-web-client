import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";

const SpecialPlace = () => {
    return (
        <div className="special-place">
            <Container>
                <Row>
                    <Col xs={12} className="text-center" >
                        <h4>WELCOME TO, CLOUDE TRAVEL PAGE</h4>
                        <i  className="fas fa-globe-europe world"></i>
                                                <h6>Do you want to change your life? Travel Now. Don't wait. If you want to travel the world, make it happen. It will be the best thing you ever do for yourself. It will motivate and inspire you in ways you could have never imagined. Travel is transformational. Travel is life.</h6>
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                        
                        <br />
                          <h2>
                            “Climb the mountain so you can see the world, not so the world can see you." ~ David McCullough
                        </h2>
                        <p>
                            This is one of those quotes about travel that has never rung truer than in today’s society. Everyone is traveling to show off and brag or catch a selfie rather than to have an experience. But its the experience that you’ll remember, not the social share.
                        </p>
                        <br />
                        <p>Do you want to change your life? Travel Now. Don't wait. If you want to travel the world, make it happen. It will be the best thing you ever do for yourself. It will motivate and inspire you in ways you could have never imagined. Travel is transformational. Travel is life.</p>
                       
                        {/* <button className="button-style">More Information...</button> */}
                    </Col>
                    <Col md={6} xs={12}>
                        <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpecialPlace;
