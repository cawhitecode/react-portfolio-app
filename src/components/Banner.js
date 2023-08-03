import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { TypeAnimation } from "react-type-animation";

export const Banner = () => {
  const toRotate = [
    "Software Engineer",
    1000,
    "Full Stack Developer",
    1000,
    "Full Stack Engineer",
    1000,
    "DevOps Engineer",
    1000,
    "Web Developer",
    1000,
    "Start Up Centric",
    1000,
  ];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Chris White</span>
                  <h1>
                    <span className="txt-rotate">
                      <span className="wrap">
                        <TypeAnimation
                        style={{
                          height: '70px',
                          width: '100%',
                          display: 'block',
                          fontSize: "1em",
                        }}
                          sequence={toRotate}
                          wrapper="span"
                          speed={5}
                          repeat={Infinity}
                        />
                      </span>
                    </span>
                  </h1>
                  <p>
                    I design and develop beautifully simple things, and I love
                    what I do.
                    <span> My passions are web development and learning new
                    technologies. I'm naturally curious and perpetually
                    improving my skills one problem at a time.</span>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
