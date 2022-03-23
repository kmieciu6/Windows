import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import styles from "./contact.module.scss";

const Contact = () => {
    const { container, contact__boxes } = styles;

    return (
        <section id="contact">
            <div className={container}>
                <div className={contact__boxes}>
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact;
