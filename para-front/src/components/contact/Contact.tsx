import React from 'react';
import './contact.css'
import ContactForm from './ContactForm';
import ContactSocials from './ContactSocials';

const Contact: React.FC = () => {

    return (
        <section className='contact-position'>
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