import React from 'react';
import { Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-body ">
        <h2 className="text-center pt-5">Contact With Us </h2>

        <div className=" allContact-Card container">
          <div className="card">
            <div className="card-container">
              <div className="icon">
                <h5>Location</h5>
                <div className="footer-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="card-text">
                <div>
                  <div className="mb-2 text-muted">Office Address</div>
                  <div>
                    <p>31 park street, 5th Avenue, <br /> Dhanmondy, Dhaka.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-container">
              <div className="icon">
                <h5>Phone Numbers</h5>
                <div className="footer-icon">
                  <i class="fas fa-phone"></i>
                </div>
              </div>
              <div className="card-text">
                <div>
                  <div className="mb-2 text-muted">Phone Numbers</div>
                  <div>
                    <p>+316668880001 <br />
                    +316668880001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-container">
              <div className="icon">
                <h5>Email</h5>
                <div className="footer-icon">
                  <i class="fas fa-envelope"></i>
                </div>
              </div>
              <div className="card-text">
                <div>
                  <div className="mb-2 text-muted">Email Address</div>
                  <div>
                    <p>swiz@gmail.com <br /> sabrinaahmednitu@gmail.com </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-5 text-center">
          <h5>
            <p>
              You can easily contact us at anytime through the above Phone
              Number <br /> or Email Id. <br />
            </p>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
