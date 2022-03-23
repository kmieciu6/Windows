import React from "react";
import Button from "../Button";
import styles from "./contactform.module.scss";

const ContactForm = () => {
    const { contact__box_second, name, email, custom_checkbox, contact__btn } = styles;

    return (
        <div className={contact__box_second}>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" className={name} id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" className={email} id="email" />
                        <label htmlFor="regulations" className={custom_checkbox}>
                            <input type="checkbox" id="regulations" />
                                <span />
                                <p>I hereby give consent for my personal data included in my application to be processed
                                    for the
                                    purposes of the recruitment process under the European Parliament’s and Council of
                                    the
                                    European Union Regulation on the Protection of Natural Persons as of 27 April 2016,
                                    with
                                    regard to the processing of personal data and on the free movement of such data, and
                                    repealing Directive 95/46/EC (Data Protection Directive)</p>
                        </label>
                        <div className={contact__btn}>
                            <Button primary medium>Send</Button>
                        </div>
            </form>
        </div>
    )
}

export default ContactForm;
