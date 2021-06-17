import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoDark from "../../assets/images/cn-logo-dark.svg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <img
              src={logoDark}
              alt="Coding Ninjas"
              style={{ height: "76px" }}
            />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <p className="titles">CODING NINJAS</p>
                <p className="links">About Us</p>
                <p className="links">Privacy Policy</p>
                <p className="links">Terms & Conditions</p>
                <p className="links">Pricing & Refund Policy</p>
                <p className="links">Bug Bounty</p>
                <p className="links">Customers</p>
                <p className="links">Press Release</p>
              </Col>
              <Col md={4}>
                <p className="titles">PRODUCTS</p>
                <p className="links">Courses</p>
                <p className="links">Try Courses for Free</p>
                <p className="links">Career Camp</p>
                <p className="links">Hire Talent</p>
              </Col>
              <Col md={4}>
                <p className="titles">COMMUNITY</p>
                <p className="links">CodeStudio</p>
                <p className="links">Blog</p>
                <p className="links">Events</p>
                <p className="links">Campus Ninja</p>
                <p className="links">Affiliate</p>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <p className="titles">FOLLOW US ON</p>
            <div className="social-links">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
              <FaTwitter />
              <FaTelegram />
            </div>
            <p className="titles mt-3">CONTACT US</p>
            <p className="links">
              <FiPhoneCall />
              1800-123-3598
            </p>
            <p className="links">
              <FiMail />
              contact@codingninjas.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
