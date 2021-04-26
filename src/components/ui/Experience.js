import React from "react";
import { EXP } from '../../data';

const Experience = () => {
    return (
        <section id="Exp">
            <h1>Experience</h1>
            <div className="work-grid">
                {EXP.map(exp => (
                    <div>
                        <h2>{exp.title}<a href={exp.extlink} rel="noopener noreferrer" target="_blank" style={{ padding: "1rem" }}>
                            <i className="fas fa-external-link-alt"></i>
                        </a></h2>
                        <p><i className={exp.icon}></i>{exp.org}</p>
                        <p>{exp.desc}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Experience;

