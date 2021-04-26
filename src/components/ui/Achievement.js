import React from "react";
import { ACH } from '../../data';

const Achieve = () => {
    return (
        <section id="Ach">
            <h1>Achievements</h1>
            <div className="work-grid">
                {ACH.map(ach => (
                    <div>
                        <h2>{ach.title}<a href={ach.extlink} rel="noopener noreferrer" target="_blank" style={{ padding: "1rem" }}>
                            <i className="fas fa-external-link-alt"></i>
                        </a></h2>
                        <p><i className={ach.icon}></i>{ach.org}</p>
                        <p>{ach.desc}</p>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default Achieve;

