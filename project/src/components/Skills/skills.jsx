import React from "react";

import "./skills.scss";

const Skills = (props) => {
    return (
        <section className="section skills">
            <h3 className="section__title">{props.title}</h3>
            <ul className="skill-group">
                {
                    props.skills.map((skill, index) => {
                        return (
                            <li className="skill-group__item" key={index}>
                                <h4 className="skill-group-name">{skill.name}</h4>
                                <ul className="skill-group-list">
                                { skill.items.map((item, index) => {

                                        return(<li className={item.marked ? "skill-group-list__item skill-group-list__item--marked": "skill-group-list__item"} key={index}>{item.name}</li>);
                                    })
                                }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Skills;
