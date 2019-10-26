import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import { compose } from "recompose";
import siteConfig from "../../data/config";

import { Container, Row, Col } from "react-awesome-styled-grid";

import withPageContext from "../pageContext";
import withLayout from "../layout";

import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const IndexPage = (props) => {
    if (siteConfig.googleAnalyticsId === "UA-000000000-1") {
        console.error(
            "WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details."
        );
    }
    const title = siteConfig.siteTitle;
    const { keywords } = siteConfig;
    const { locale } = props.pageContext;
    const { ...translations } = props.intl.messages;
    console.log(translations);
    return (
        <React.Fragment>
            <SEO title={title} keywords={keywords} lang={locale}  />
            <main>
                <Container className="page-content" fluid>
                    <Row>
                        <Col xs={4}>
                            <Hero></Hero>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={4} className="column column--left">
                            <Experience title={translations.experience.title} employments={translations.experience.employments}></Experience>
                            <Education title={translations.education.title} schools={translations.education.schools}></Education>
                        </Col>
                        <Col xs={4} md={4} className="column column--rigth">
                            <About title={translations.about.title} desc={translations.about.desc}></About>
                            <Skills title={translations.skills.title} skills={translations.skills.skills}></Skills>
                            <Contact title={translations["contact.title"]}></Contact>
                        </Col>
                    </Row>
                </Container>
                <p>{locale}</p>
                <FormattedMessage id="home.main" tagName="div" />
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
