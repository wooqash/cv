import React from "react";
import siteConfig from "../../../data/config";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
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
        <div className="social">
            {siteConfig.social.github && <a className="social__link github" href={siteConfig.social.github}>
            <FaGithub className="social__icon" size="32" />
            </a>}
            {siteConfig.social.linkedin && <a className="social__link linkedin" href={siteConfig.social.linkedin}>
            <FaLinkedin className="social__icon" size="32" />
            </a>}
            {siteConfig.social.twitter && <a className="social__link twitter" href={siteConfig.social.twitter}>
            <FaTwitter className="social__icon" size="32" />
            </a>}
            {siteConfig.social.email && <a className="social__link email" href={`mailto:${siteConfig.social.email}`}>
            <FaEnvelope className="social__icon" size="32" />
            </a>}
        </div>
    </div>
);

export default Hero;
