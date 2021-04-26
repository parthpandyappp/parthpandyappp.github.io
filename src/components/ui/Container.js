import React from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Achieve from "./Achievement";
import Experience from "./Experience"
import Cocurricular from "./Cocurri"

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <Skills />
            <Work />
            <Experience />
            <Cocurricular />
            <Achieve />
            <Contact />
        </div>
    );
};

export default Container;

