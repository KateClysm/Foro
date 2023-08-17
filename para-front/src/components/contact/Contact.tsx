import React, { FormEvent } from 'react';
import './contact.css'
import instagramIcon from '../../assets/contact/instagram.png'
import facebookIcon from '../../assets/contact/facebook.png'
import twitterIcon from '../../assets/contact/twitter.png'
import mailIcon from '../../assets/contact/mail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <section className='contact-position'>
            <h1 className='title'>
                Contact Us
            </h1>
            <div className='contact-container'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faUser} className='contact-icon' />
                        <label htmlFor='name'>
                            Your name
                            <span className="contact-required">*</span>
                        </label>
                    </div>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Jane Doe'
                        className='contact-input'
                        required
                    />
                    <span className="contact-validation">
                        Oh no!
                    </span>
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                        <label htmlFor='email'>
                            Your email
                            <span className="contact-required">*</span>
                        </label>
                    </div>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='janedoe@email.com'
                        className='contact-input'
                        required
                    />
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faMessage} className='contact-icon' />
                        <label htmlFor='message'>
                            Your message
                            <span className="contact-required">*</span>
                        </label>
                    </div>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='I wanted to ask about...'
                        required
                    >
                    </textarea>
                    <input className='contact-submit' type='submit' value='Send' />
                </form>
                <div className='contact-socials'>
                    <a href='#' className='social'>
                        <img className='contact-logo' src={instagramIcon} alt='instagram logo' />
                        @Para_seekers
                    </a>
                    <a href='#' className='social'>
                        <img className='contact-logo' src={mailIcon} alt='mail logo' />
                        Paraseekers@gmail.com
                    </a>
                    <a href='#' className='social'>
                        <img className='contact-logo' src={twitterIcon} alt='twitter logo' />
                        Para/seekers_ok
                    </a>
                    <a href='#' className='social'>
                        <img className='contact-logo' src={facebookIcon} alt='facebook logo' />
                        Paraseekers_official
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;