import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    return (
        // < className="contact-banner">
        //     <h2>Contact With Us</h2>
        // </>
        <>
                 <div className="contact-body">
            <h2 className="contact-banner pt-5">Contact With Us </h2>
            <div className="card-group pt-3 ">
                <div className="card">
                    
                    

<Card className="info-box contact-card" style={{ width: '18rem' }}>
         <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <div className="footer-icon">
                                <i class="fas fa-map-marker-alt"></i>
                               
                            </div>
        <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
        <Card.Text>
                                    31 park street, 5th Avenue, Dhanmondy, Dhaka.
                                    
        </Card.Text>
       </Card.Body>
        </Card>


                </div>
                <div className="card">
                
        <Card className="info-box contact-card" style={{ width: '18rem' }}>
         <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                 <div className="footer-icon">
                                <i class="fas fa-phone"></i>
                               
                            </div>
        <Card.Subtitle className="mb-2 text-muted">Phone</Card.Subtitle>
        <Card.Text>
        +31 666 888 0001 <br />
                                    +31 666 888 0023
                                   
        </Card.Text>
       </Card.Body>
        </Card>


                </div>
                <div className="card">
                
        <Card className="info-box contact-card" style={{ width: '18rem' }}>
         <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <div className="footer-icon">
                                 <i class="fas fa-envelope"></i> 
                            </div>  
        <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
        <Card.Text>
       info@example.com <br />
     info@example.com
                                  
        </Card.Text>
       </Card.Body>
        </Card>


                </div>
            </div>
            <div className="mt-5 text-center" >
                <h5> <p>You can easily contact us at anytime through the above phone number <br /> or email id. <br /> </p></h5>
               
      </div>
            </div> 
        </>
    );
};

export default Contact;



