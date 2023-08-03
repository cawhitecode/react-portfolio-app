import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Have a question or want to work together?</h2>
                <h4>info@cawhite.dev</h4>
               </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}