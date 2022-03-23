import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Nav from "./Nav";

const Header = () => {
    const {header, container} = styles;

    return (
        <header className={header}>
            <div className={container}>
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
}

export default Header;
