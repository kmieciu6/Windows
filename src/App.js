import React from "react";
import "./scss/main.scss";
import Header from "./components/Header";
import Opening from "./components/Opening";
import Statistics from "./components/Statistics";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
            <Header/>
            <Opening/>
            <Statistics/>
            <Benefits/>
            <Pricing/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;
