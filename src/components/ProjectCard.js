import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, name, link }) => {

  return (
    <Col size={12} sm={6} md={4} onClick={e => window.open(link, '_blank')} className="linkOnHover" >
      <div className="proj-imgbx">
      <img className="proj-img" src={imgUrl} alt={name}/>
        <div className="proj-txtx">
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
