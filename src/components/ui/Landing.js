import React from "react";
import illustration from "../img/ill.png"
import Typed from 'react-typed';
import { SOCIAL_LINKS, RESUME_LINK, FULL_NAME } from '../../data';

const Landing = () => {
    return (
        <section className="landing">
            <div>
                <h1>{FULL_NAME}</h1>
                <h4>
                    <span className="typing">
                        <Typed
                            strings={[
                                'Open-Source Enthusiast',
                                'Software Engineer',
                                'CSE Undergrad',
                                'Web Developer',
                                'Bookworm',
                                'Cinemaphile'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </Typed>
                    </span>
                </h4>
                <ul className="social-links">
                    {SOCIAL_LINKS.map(social => (
                        <li>
                            <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                <i className={social.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>

                <h4><a id="resume" href={RESUME_LINK} rel="noopener noreferrer" target="blank">Resume</a></h4>
            </div>
            <div>
                <img id="dp" src={illustration} alt="illustration" />
            </div>
        </section>
    );
};

export default Landing;
