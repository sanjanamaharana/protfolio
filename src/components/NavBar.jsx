import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 120"
            width="250"
            height="75"
            role="img"
            aria-label="sanjaM logo"
            className="img-fluid"
          >
            <rect x="8" y="8" width="104" height="104" rx="18" fill="#0f172a" />
            <path
              d="M36 36 C50 20, 82 28, 70 44 C58 60, 30 56, 44 74"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 46 C74 68, 56 78, 52 86 L52 92"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="52" cy="96" r="2.6" fill="#ffffff" />

            <text
              x="136"
              y="78"
              style={{
                fontFamily: "Centera, sans-serif",
                fontWeight: 700,
                fontSize: "56px",
                letterSpacing: "-2px",
              }}
              fill="#ffffffff"
            >
              sanja<tspan fill="#f59e0b">M</tspan>
            </text>

            <rect x="136" y="86" width="175" height="6" rx="3" fill="#f59e0b" />
          </svg>
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
