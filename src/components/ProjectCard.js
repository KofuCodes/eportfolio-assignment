import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* Make the whole card clickable by wrapping everything in the anchor tag */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="proj-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            {/* Set text color to white */}
            <h4 style={{ color: 'white' }}>{title}</h4>
            <span style={{ color: 'white' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
