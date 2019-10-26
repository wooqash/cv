import React from "react";
import siteConfig from "../../../data/config";

import authorAvatar from "../../images/gatsby-astronaut.png";

import "./hero.scss";

const Hero = (props) => (
    <div className="hero">
        <h1 className="hero__title">{siteConfig.authorName}</h1>
        <h2 className="hero__subtitle">{siteConfig.authorPosition}</h2>
        <img
            className='hero__avatar'
            src={authorAvatar}
            alt='user avatar'
        />

    </div>
);

export default Hero;
