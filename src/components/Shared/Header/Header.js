import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                className="py-3"
                collapseOnSelect
                expand="lg"
                bg="black"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                    >
                        <img
                            className="headerimg"
                            src="https://image.freepik.com/free-vector/creative-travel-logo-template_23-2148619516.jpg"
                            alt=""
                        />
                        <i className="fs-3 fw-bold ">
                            CLOUDE<span className="word-color">TRAVEL</span>
                        </i>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto nav-menu">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            {user?.email && (
                                <>
                                    <Nav.Link as={Link} to="/mybooking">
                                        All Bookings
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/managebooking">
                                       Booking-info
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/addnewbooking">
                                        New Booking
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link as={Link} to="/about">
                                About us
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {user?.email ? (
                            <span>
                                <span className="username">
                                    {user?.displayName}
                                </span>
                                <span className=" logout" onClick={logOut}>
                                    Log Out
                                </span>
                            </span>
                        ) : (
                            <Nav>
                                <Nav.Link
                                    as={Link}
                                    to="/login"
                                    className="fs-5"
                                >
                                    Log in
                                </Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
