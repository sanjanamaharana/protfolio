import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Logo";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="#home">
          {/* === LOGO === */}
          <Logo />  
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* Right side: Icons + Button */}
          <div className="d-flex align-items-center gap-4">
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



            {/* Button */}
            {/* Anchor Link acting as a Button */}
            <a
              href="#contact" // ✅ Use the correct ID for the Contact section
              className="btn btn-warning fw-semibold px-4 py-2 rounded-pill"
              onClick={() => onUpdateActiveLink("contact")} // Optional: Update active state
            >
              Let’s Connect
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
