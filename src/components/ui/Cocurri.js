import React from "react";
import { COCU } from '../../data';

const Cocurricular = () => {
    return (
        <section id="Concu">
            <h1>Cocurricular</h1>
            <div className="work-grid">
                {COCU.map(cocu => (
                    <div>
                        <h2>{cocu.title}</h2>
                        <p><i className={cocu.icon}></i>{cocu.org}</p>
                        <p>{cocu.desc}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Cocurricular;

