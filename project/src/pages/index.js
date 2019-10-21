import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";
import siteConfig from "../../data/config";


// import { Container, Row, Col } from "react-awesome-styled-grid";
// import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

import withPageContext from "../pageContext";

import withLayout from "../layout";

import astronaut from "../images/gatsby-astronaut.png";

import SEO from "../components/SEO";

const IndexPage = (props) => {
    if (siteConfig.googleAnalyticsId === "UA-000000000-1") {
        console.error(
            "WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details."
        );
    }
    const title = siteConfig.siteTitle;
    const { keywords } = siteConfig;
    const { locale } = props.pageContext;
    console.log(props);
    return (
        <React.Fragment>
            <SEO title={title} keywords={keywords} lang={locale} />
            <main>

                <p>{locale}</p>
                <FormattedMessage id="home.main" tagName="div" />
                <img src={astronaut} alt="" />
            </main>
        </React.Fragment>
    );
};

IndexPage.propTypes = {
    intl: intlShape.isRequired
};

export default compose(
    withPageContext,
    withLayout,
    injectIntl
)(IndexPage);
