import React from "react";
import styles from "./pricing.module.scss";
import Packages from "./PackageStyled";

const Pricing = () => {
    const {
        pricing,
        container,
        pricing__boxes
    } = styles;

    return (
        <section className={pricing} id="pricing">
            <div className={container}>
                <h2>Pricing</h2>
                <div className={pricing__boxes}>
                    <Packages />
                </div>
            </div>
        </section>
    )
}

export default Pricing;
