import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/homepage.css"; 

const SvgComponent = ({ onClick }) => { 
  return (
    <Container fluid className="homepage">
      <Row className="justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <svg
            width="100%" 
            height="100%" 
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Logo Box (Left Rect) */}
            <rect className="logo-box" x="160" y="240" width="800" height="600" rx="40" fill="#D9D9D9" />

            {/* Slogan Box (Above-Right Rect) */}
            <rect className="slogan-box" x="1285" y="240" width="300" height="112" rx="50" fill="#D9D9D9" />

            {/* Button Box (Below-Right Rect) */}
            <rect className="button-box" x="1285" y="728" width="300" height="112" rx="50" fill="#D9D9D9" onClick={onClick} />
          </svg>
        </Col>
      </Row>
    </Container>
  );
};

export default SvgComponent;
