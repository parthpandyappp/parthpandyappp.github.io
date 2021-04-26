import React from "react";
import { WORK } from '../../data';

const Work = () => {
    return (
        <section id="work">
            <h1>Projects</h1>
            <div className="work-grid">
                {WORK.map(project => (
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div>
                            <a href={project.ghlink} rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-lg fa-github"></i>
                            </a>
                            <a href={project.extlink} rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-lg fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                ))}
                <h2>......</h2>
                <p>Head over to my GitHub for more projects</p>
            </div>
        </section>
    );
};

export default Work;
