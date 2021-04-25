import React from "react";
import { SOCIAL_LINKS} from '../../data';

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <div>
                <ul className="social-links">
                    {SOCIAL_LINKS.map(social => (
                        <li>
                            <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                <i className={social.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
