import React from "react";

import "./education.scss";

const Education = (props) => (
    <section className="section education">
        <h3 className="section__title">{props.title}</h3>
        {
            props.schools.map((school, index) => {
                return (
                    <div className="school" key={index}>
                        <h4 className="school__name">{school.name}</h4>
                        <p className="school__date">{school.date}</p>
                        <p className="school__field">{school.field}</p>
                        <p className="school__spec">{school.spec}</p>
                    </div>
                )
            })
        }
    </section>
);

export default Education;
