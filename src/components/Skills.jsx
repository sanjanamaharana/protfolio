import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import colorSharp from '../assets/img/color-sharp.png'


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <section className='skills' id='skills'>
      <Container fluid>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>Here are some of my technical skills that I have acquired over time.</p>


              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}             // ✅ autoplay
                autoPlaySpeed={1000}        // ✅ 2s per slide
                customTransition="all 1s ease" // ✅ smooth transition
                transitionDuration={1000}   // ✅ 1s fade/slide
                removeArrowOnDeviceType={["tablet", "mobile"]} // ✅ cleaner UI on small screens
                className="skill-slider"
              >
                <div className="item">
                  <img src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fFdlYiUyMERldmVsb3BtZW50fGVufDB8fDB8fHww" alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEJyYW5kJTIwSWRlbnRpdHl8ZW58MHx8MHx8fDA%3D" alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src="https://images.unsplash.com/photo-1660806982611-0a41c0527966?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlnbWF8ZW58MHx8MHx8fDA%3D" alt="Image" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <img src="https://images.unsplash.com/photo-1613068687893-5e85b4638b56?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdlYiUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Image" />
                  <h5>Web Design</h5>
                </div>
              </Carousel>

            </div>

          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src="https://plus.unsplash.com/premium_photo-1670146953733-ddae8cc72289?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hdGlvbiUyMHdvcmxkJTIwbmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D" alt="" />
    </section>
  )
}

export default Skills
