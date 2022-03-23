import React from "react";
import Button from "../Button";
import styles from "./opening.module.scss";

const Opening = () => {
    const { opening, container } = styles;

    return (
        <section className={opening}>
            <div className={container}>
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <Button>Open your shop</Button>
            </div>
        </section>
    )
}

export default Opening;
