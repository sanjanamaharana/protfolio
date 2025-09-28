import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/Logo'
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            
          {/* Using Logo component. If this still fails, we need to know the exact path/name */}
          <Logo />
          </Col>
          {/* Ensure the footer content is centered on mobile, right-aligned on desktop */}
          <Col sm={6} className='text-center text-sm-end'>
          {/* Add d-flex to properly handle the gap and center on mobile */}
          <div className='d-flex justify-content-center justify-content-sm-end socia-icon gap-4 mb-3 mb-sm-0'>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanjana-maharanana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <i
                className="bi bi-linkedin"
                style={{ fontSize: "1.8rem", color: "#0A66C2" }} // LinkedIn blue
              ></i>
            </a>


            {/* Instagram */}
            <a
              href="https://instagram.com/sanjana.maharana_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <i
                className="bi bi-instagram"
                style={{
                  fontSize: "1.8rem",
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              ></i>
            </a>




            {/* GitHub */}
            <a
              href="https://github.com/sanjanamaharana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <i
                className="bi bi-github"
                style={{ fontSize: "1.8rem", color: "#ffffffff" }}
              ></i>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/KhusiSanjana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <i
                className="bi bi-x-lg"
                style={{ fontSize: "1.8rem", color: "#fffdfdff" }}
              ></i>
            </a>
          </div>
          {/* Corrected typo: All Rights Reserved */}
          <p>CopyRight 2025. All Rights Reserved </p>
          </Col>

        </Row>
      </Container>
    </footer> 
  )
}

export default Footer
