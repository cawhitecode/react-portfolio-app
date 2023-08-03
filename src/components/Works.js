import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


import zestAiLogo from "../assets/img/zestAiLogo.jpg";
import tiktokLogo from "../assets/img/tiktok-banner-black-3.svg";
import b2dLogo from "../assets/img/b2dLogo.png";
import arsLogo from "../assets/img/ars.png";
import corelogicLogo from "../assets/img/corelogicLogo.png";
import tdAmeritradeLogo from "../assets/img/tdAmertiradeLogo.jpg";

import ecommLogo from "../assets/img/ecomm.avif";
import beerLogo from "../assets/img/beerLogo.avif";
import portfolioLogo from "../assets/img/portfolioLogo.avif";

export const Works = () => {

  const works = [
    {
      name: "Zest AI",
      description: "Software Engineer",
      link: "https://www.zest.ai/",
      imgUrl: zestAiLogo,
    },
    {
      name: "TikTok",
      description: "Software Engineer",
      link: "https://www.tiktok.com/",
      imgUrl: tiktokLogo,
    },
    {
      name: "Barn2Door",
      description: "Software Engineer",
      link: "https://www.barn2door.com/",
      imgUrl: b2dLogo,
    },
    {
      name: "Auto Rescue Solutions",
      description: "Software Engineer",
      link: "https://www.autorescuesolutions.com/",
      imgUrl: arsLogo,
    },
    {
      name: "CoreLogic",
      description: "Integration Anakyst",
      link: "https://www.corelogic.com/",
      imgUrl: corelogicLogo,
    },
    {
      name: "TD Ameritrade",
      link: "https://www.tdameritrade.com/",
      description: "NCDG",
      imgUrl: tdAmeritradeLogo,
    },
  ];

  const projects = [
    {
      
      name: "Ecommerce App",
      link: 'https://github.com/will-white/ecommorg',
      imgUrl: ecommLogo,
    },
    {
      name: "Portfolio App",
      link: "https://github.com/cawhitecode/react-portfolio-app",
      imgUrl: portfolioLogo,
    },
    {
      name: "Punk Beer App",
      link: "https://github.com/cawhitecode/Angular-Punk-Beers-v2",
      imgUrl: beerLogo,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Work & Projects</h2>
                <Tab.Container id="languages-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          works.map((work, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...work}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
