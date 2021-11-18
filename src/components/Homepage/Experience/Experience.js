import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience">
            <Container>
                <h4 className="">Why Choose Us</h4>
                <p></p>
                {/* <h1>Experience our service</h1> */}
                <Row>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            <h2>Worldwide service</h2>
                            <p>
                                Average people say this to give themselves
                                permission to meander all over the place rather
                                than set and achieve goals.
                            </p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                            
                            <h2>Experience </h2>
                            <p>
                                Average people say this to console themselves
                                when they feel helpless to make a positive 
                                change in the world.
                            </p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-2">
                        <div className="experience-card">
                           
                            <h2>Cheaper</h2>
                            <p>
                                Average people say this because it makes them
                                feel better to pretend is directing events in
                                their lives.
                            </p>
                        </div>
                    </Col>
                    {/* <Col md={3} xs={12} className="my-2">
                        <div className="experience-card">
                           
                            <h2>24/7 Service</h2>
                            <p>
                                Trusted results for Your Search Query. Check
                                Visymo Search for the best results! Unlimited
                                Access. 100% Secure.
                            </p>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Experience;
