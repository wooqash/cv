import React from "react";

import "./about.scss";

const About = (props) => (
    <section className="section about">
        <h3 className="section__title">{props.title}</h3>
        <p className="description">{props.desc}</p>
    </section>
);

export default About;
