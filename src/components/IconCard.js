import { Col } from "react-bootstrap";

export const IconCard = ({ title, icon }) => {
  return (
    <Col size={6} sm={4} md={3}>
        <div className="proj-imgbx">
        <img className="proj-img" src={icon} alt={title + ' Icon'}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
        </div>
    </Col>
  )
}
