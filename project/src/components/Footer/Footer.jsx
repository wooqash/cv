import React from "react";
import { FormattedMessage } from "react-intl";
import siteConfig from "../../../data/config";

import "./footer.scss";

const Footer = () => {
    const startDate = '2019';
    const date = new Date().getFullYear().toString();
    return (<footer>
        {siteConfig.authorName} <span>&copy;</span> <span>{date !== startDate ? startDate + ' - ' + date : date  }</span>, <FormattedMessage id="footer.title" />
    </footer>)
};

export default Footer;
