import React from "react";

import "./clause.scss";

const Clause = (props) => (
    <section className="section clause">
        <p className="clause__text">{props.title}</p>
    </section>
);

export default Clause;
