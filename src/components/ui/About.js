import React from "react";
import { ABOUT } from '../../data';

const About = () => {
    return (
        <section id="about">
            <p style={{ textAlign: "center" }}>The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.</p>
            <h1 style={{ marginTop: "8rem" }}>About</h1>
            <div>
                {ABOUT.map(para => (
                    <p>
                        {para.text}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default About;
