import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ id, title, image, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;