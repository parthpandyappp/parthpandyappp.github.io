import React from "react";
import { SKILLS } from '../../data';

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills-grid">
                {SKILLS.map(skill => (
                    <div>
                        <i className={skill.icon}></i>
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
