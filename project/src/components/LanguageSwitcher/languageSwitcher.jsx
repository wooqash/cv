import React from "react";
import { Link } from "gatsby";
import { languages, getLocalizedPath } from "../../i18n";
import { PageContext } from "../../pageContext";

import "./languageSwitcher.scss";

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
