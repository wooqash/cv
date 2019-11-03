import React from "react";

import LanguageSwitcher from "../LanguageSwitcher";

import "./Header.scss";

const Header = () => (
    <header className="header">
        <nav>
            <LanguageSwitcher />
        </nav>
    </header>
);

export default Header;
