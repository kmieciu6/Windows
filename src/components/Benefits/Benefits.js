import React from "react";
import styles from "./benefits.module.scss";

const Benefits = () => {
    const {
        benefits,
        container,
        benefits__content,
        benefits__box_first,
        benefits__box__text_first,
        benefits__box__img_first,
        benefits__box_second,
        benefits__box__text_second,
        benefits__box__img_second,
        benefits__box_third,
        benefits__box__text_third,
        benefits__box__img_third
    } = styles;

    return (
        <section className={benefits} id="benefits">
            <div className={container}>
                <div className={benefits__content}>
                    <div className={benefits__box_first}>
                        <div className={benefits__box__text_first}>
                            <h2>Be always first</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="line" />
                        <div className={benefits__box__img_first}>
                        </div>
                    </div>
                    <div className={benefits__box_second}>
                        <div className={benefits__box__img_second}>
                        </div>
                        <div className={benefits__box__text_second}>
                            <h2>Your shop is where you are!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className={benefits__box_third}>
                        <div className={benefits__box__text_third}>
                            <h2>Increase recognition your brand!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className={benefits__box__img_third}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;
