import React from "react";
import styles from "./footer.module.scss";
import twitterImg from "../../assets/Twitter.svg";
import facebookImg from "../../assets/Facebook.svg";
import Logo from "../Logo";

const Header = () => {
    const { footer, container, copyright, links, twitter, facebook } = styles;

    return (
        <footer className={footer}>
            <div className={container}>
                <div className={copyright}>
                    <Logo />
                    <p>© 2021 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className={links}>
                    <a href="https://twitter.com" className={twitter}>
                        <img src={twitterImg} alt="twitter" />
                    </a>
                    <a href="https://pl-pl.facebook.com/" className={facebook}>
                        <img src={facebookImg} alt="facebook" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Header;
