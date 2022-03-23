import React from "react";
import styles from "./statistics.module.scss";
import StatisticsBox from "./StatisticsBox";
import Circle from "./Circle";

const Statistics = () => {
    const {statistics, container, statistics__content, statistics__box, statistics__img_person, statistics__img_eye, statistics__img_catalog} = styles;

    return (
        <section className={statistics} id="statistics">
            <div className={container}>
                <h2>The most popular sales platform in country</h2>
                <div className={statistics__content}>
                    <div className={statistics__box}>
                        <Circle redish />
                        <StatisticsBox number="100000+" text="daily entries"/>
                    </div>
                    <div className={statistics__box}>
                        <Circle primary />
                        <StatisticsBox number="2000000+" text="seen products every day"/>
                    </div>
                    <div className={statistics__box}>
                        <Circle green />
                        <StatisticsBox number="10000+" text="added posts daily"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics;
