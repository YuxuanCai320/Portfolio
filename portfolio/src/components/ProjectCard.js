import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image-container mb-4">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-description-overlay">
                    <p className="project-description">{project.description}</p>
                </div>
            </div>
            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
            </div>
        </div>
    );
}

export default ProjectCard;
