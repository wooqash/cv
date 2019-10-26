import React from "react";
import siteConfig from "../../../data/config";
import { FaMapMarkerAlt, FaPhone, FaGlobe, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

import "./contact.scss";

const Contact = (props) => (
    <section className="section contact">
        <h3 className="section__title">{props.title}</h3>
        <ul className="contact-info">
            {siteConfig.contact.address &&
                <li>
                    <a className="contact-info__link address" href={siteConfig.contact.addressLink} target="_blank">
                        <FaMapMarkerAlt className="contact-info__icon" size="16" />
                        {siteConfig.contact.address}
                    </a>
                </li>
            }
            {siteConfig.contact.phoneNo &&
                <li>
                    <a className="contact-info__link phone" href={`tel:${siteConfig.contact.phoneNo}`}>
                        <FaPhone className="contact-info__icon" size="16" />
                        {siteConfig.contact.phoneNo}
                    </a>
                </li>
            }
            {siteConfig.contact.email &&
                <li>
                    <a className="contact-info__link email" href={`mailto:${siteConfig.contact.email}`}>
                        <FaEnvelope className="contact-info__icon" size="16" />
                        {siteConfig.contact.email}
                    </a>
                </li>
            }
            {siteConfig.contact.site &&
                <li>
                    <a className="contact-info__link site" href={siteConfig.contact.siteLink}>
                        <FaGlobe className="contact-info__icon" size="16" />
                        {siteConfig.contact.site}
                    </a>
                </li>
            }
            {siteConfig.contact.site2 &&
                <li>
                    <a className="contact-info__link site zibeline" href={siteConfig.contact.site2Link}>
                        <FaGlobe className="contact-info__icon" size="16" />
                        {siteConfig.contact.site2}
                    </a>
                </li>
            }
        </ul>
        <ul className="social">
            {siteConfig.social.github &&
                <li>
                    <a className="social__link github" href={siteConfig.social.githubLink}>
                        <FaGithub className="social__icon" size="16" />
                        {siteConfig.social.github}
                    </a>
                </li>
            }
            {siteConfig.social.linkedin &&
                <li>
                    <a className="social__link linkedin" href={siteConfig.social.linkedinLink}>
                        <FaLinkedin className="social__icon" size="16" />
                        {siteConfig.social.linkedin}
                    </a>
                </li>
            }
            {siteConfig.social.twitter &&
                <li>
                    <a className="social__link twitter" href={siteConfig.social.twitterLink}>
                        <FaTwitter className="social__icon" size="16" />
                        {siteConfig.social.twitter}
                    </a>
                </li>
            }
        </ul>
    </section>
);

export default Contact;
