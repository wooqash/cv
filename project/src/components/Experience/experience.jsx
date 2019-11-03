import React from "react";

import "./experience.scss";

const Experience = (props) => {
    return (
    <section className="section experience">
        <h3 className="section__title">{props.title}</h3>
        {
            props.employments.map((employement, index) => {
                return (
                    <div className="employment" key={index}>
                        <h4 className="employment__company">{employement.company}</h4>
                        <p className="employment__date">{employement.date}</p>
                        <p className="employment__position">{employement.position}</p>
                        <p className="employment__responsibilities">{employement.responsibilities}</p>
                    </div>
                )
            })
        }
    </section>
)};

export default Experience;
