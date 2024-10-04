import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../CSS/ProjectCard.css"

const ProjectCard = ({ id, title, image, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
