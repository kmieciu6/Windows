import React from "react";

const StatisticsBox = ({number, text}) => {

    return (
        <>
            <h3>{number}</h3>
            <p>{text}</p>
        </>
    )
}

export default StatisticsBox;