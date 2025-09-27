import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

// ✅ CORRECT PATH
import bannerImg from '../assets/protofolio.png';


function Banner() {
  const toRotate = ['web developer', 'web designer', 'UI/UX designer']
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000
  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => { clearInterval(ticker) }
  }, [text])
  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }
  return (

    <section className="banner" id="home">
      <Container fluid>
        <Row className='align-items-center justify-content-between g-1'>
          <Col xs={12} md={7} xl={8} className="text-col">

            <h1>{`Hi! I'm Sanjana Maharana`}  <div className='rotating-text-container'>
              <span className='wrap'>{text}</span>
            </div>
            </h1>
            <p>I build intuitive, high-impact web experiences by seamlessly blending creative design with clean, optimized code.</p>
            <button href="#contact" className="vvd" onClick={() => console.log('connect')}>
              <a href="#contact" >
                Let's connect <ArrowRightCircle size={25} />
              </a>

            </button>
          </Col>
          <Col xs={12} md={4} xl={4} className="align-items-center">
            <img
              src={bannerImg}
              alt="Sanjana Maharana professional portrait"
            />

          </Col>
        </Row>

        {/* Add stars dynamically */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}

      </Container>

      <div className="background-image-left"></div>
      <div className="background-image-right"></div>
    </section>

  )
}

export default Banner
