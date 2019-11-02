import React from "react";
import { Link } from "gatsby";

import cs from "../../images/cs.png";
import en from "../../images/en.png";

import { languages, getLocalizedPath } from "../../i18n";

import { PageContext } from "../../pageContext";

import "./LanguageSwitcher.scss";

const flags = {
    cs,
    en
};

const LanguageSwitcher = () => (
    <PageContext.Consumer>
        {({ originalPath, locale }) => (
            <div className="language-switcher">
                {languages.map(lang =>
                    lang.locale === locale ? (
                        <span className="language-switcher__active-lang">{lang.label}</span>
                    ) : (
                        <Link
                            key={lang.locale}
                            to={getLocalizedPath(originalPath, lang.locale)}
                            className="language-switcher__link"
                        >
                            {lang.label}
                        </Link>
                    )
                )}
            </div>
        )}
    </PageContext.Consumer>
);

export default LanguageSwitcher;
