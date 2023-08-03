import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { IconCard } from "./IconCard";

import typeScriptIcon from "../assets/img/typescript-icon.svg";
import javaScriptIcon from "../assets/img/javascript-icon.svg";
import pythonIcon from "../assets/img/python-icon.svg";
import goIcon from "../assets/img/go-icon.svg";
import postgreSQLIcon from "../assets/img/postgresql-icon.svg";
import csharpIcon from "../assets/img/c-icon.svg";
import monogoDBIcon from "../assets/img/mongodb-icon-1.svg";
import javaIcon from "../assets/img/java-icon.svg";

import nodeJsIcon from "../assets/img/nodejs-icon.svg";
import nestJsIcon from "../assets/img/nestjs.svg";
import reactJsIcon from "../assets/img/react-2.svg";
import expressJsIcon from "../assets/img/express-icon.svg";
import typeOrmIcon from "../assets/img/typeorm-icon.png";
import flaskIcon from "../assets/img/flask-icon.png";
import terraformIcon from "../assets/img/terraform-icon.png";
import prometheusIcon from "../assets/img/prometheus.svg";

import awsIcon from "../assets/img/aws-2.svg";
import dockerIcon from "../assets/img/docker.svg";
import kubernetsIcon from "../assets/img/kubernets.svg";
import grafanaIcon from "../assets/img/grafana.svg";
import postmanIcon from "../assets/img/postman.svg";
import visualStudioCodeIcon from "../assets/img/visual-studio-code-1.svg";
import gitIcon from "../assets/img/git-icon.svg";
import jiraIcon from "../assets/img/jira-1.svg";

export const Skills = () => {

  const skills = [
    {
      title: "TypeScript",
      icon: typeScriptIcon,
    },
    {
      
      title: "JavaScript",
      icon: javaScriptIcon,
    },
    {
      title: "Python",
      icon: pythonIcon,
    },
    {
      title: "Go",
      icon: goIcon,
    },
    {
      title: "PostgreSQL",
      icon: postgreSQLIcon,
    },
    {
      title: "C#",
      icon: csharpIcon,
    },
    {
      title: "MongoDB",
      icon: monogoDBIcon,
    },
    {
      title: "Java",
      icon: javaIcon,
    },
  ];

  const frameworks = [
    {
      
      title: "NodeJS",
      icon: nodeJsIcon,
    },
    {
      title: "NestJS",
      icon: nestJsIcon,
    },
    {
      title: "React",
      icon: reactJsIcon,
    },
    {
      title: "ExpressJS",
      icon: expressJsIcon,
    },
    {
      title: "TypeOrm",
      icon: typeOrmIcon,
    },
    {
      title: "Flask",
      icon: flaskIcon,
    },
    {
      title: "Terraform",
      icon: terraformIcon,
    },
    {
      title: "Prometheus",
      icon: prometheusIcon,
    }
  ];

  const tools = [
    {
      
      title: "AWS",
      icon: awsIcon,
    },
    {
      title: "Docker",
      icon: dockerIcon,
    },
    {
      title: "Kubernetes",
      icon: kubernetsIcon,
    },
    {
      title: "Grafana",
      icon: grafanaIcon,
    },
    {
      title: "Postman",
      icon: postmanIcon,
    },
    {
      title: "Visual Studio Code",
      icon: visualStudioCodeIcon,
    },
    {
      title: "Git",
      icon: gitIcon,
    },
    {
      title: "Jira",
      icon: jiraIcon,
    },
  ];

  return (
    <section className="projects" id="skills">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Skills</h2>
                <Tab.Container id="languages-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Languages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Frameworks</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          skills.map((skill, index) => {
                            return (
                              <IconCard
                                key={index}
                                {...skill}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          tools.map((tool, index) => {
                            return (
                              <IconCard
                                key={index}
                                {...tool}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          frameworks.map((framework, index) => {
                            return (
                              <IconCard
                                key={index}
                                {...framework}
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
