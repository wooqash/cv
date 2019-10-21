import React from "react";

import LanguageSwitcher from "../LanguageSwitcher";

import "./Header.sass";

const Header = () => (
    <header className="Header">
        <nav>
            <LanguageSwitcher />
        </nav>
    </header>
);

export default Header;
