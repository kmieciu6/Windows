import React, { useState } from "react";
import styles from "./nav.module.scss";
import Burger from "./Burger";
import Menu from "./Menu";

const Nav = () => {
    const [open, setOpen] = useState(false);

    const {header__nav} = styles;

    return (
        <nav className={header__nav}>
            <Burger open={open} setOpen={setOpen} />
            <Menu />
        </nav>
    )
}

export default Nav;
