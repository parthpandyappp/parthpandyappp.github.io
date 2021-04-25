import React from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    );
};

export default Container;
