import React from 'react';
import { Col } from "react-bootstrap";

const ProjectCard = ({ 
  title, 
  description, 
  imgUrl, 
  link,
  onCardClick
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="proj-card-link"
        onClick={onCardClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 style={{ color: 'white' }}>{title}</h4>
            <span style={{ color: 'white' }}>{description}</span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;