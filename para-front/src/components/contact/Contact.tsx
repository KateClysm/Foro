import React from 'react';
import './contact.scss'
import ContactForm from './ContactForm';
import ContactSocials from './ContactSocials';

const Contact: React.FC = () => {

    return (
        <section className='contact'>
            <h1 className='title'>
                Contact Us
            </h1>
            <div className='contact-container'>
                <ContactForm />
                <ContactSocials />
            </div>
        </section>
    );
};

export default Contact;