import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';

const ContactForm: React.FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email === '' || emailRegex.test(email);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        emailjs.sendForm('service_5e3kcjf', 'template_5o5busd', form, '8n-mlNrupz3rdpU0s')
        .then((result) => {
            
            console.log(result.text);
            setSubmitMessage("Thank you! We'll be in touch with you shortly.")
            setEmail('')
            setName('')
            setMessage('')
            setNameTouched(false)
            setEmailTouched(false)
            setMessageTouched(false)

        }, (error) => {
            console.log(error.text);
        });

        form.reset()
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            {!submitMessage &&
                <>
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faUser} className='contact-icon' />
                        <label className='post-text' htmlFor='name'>
                            Your name
                            <span className='contact-required'>*</span>
                        </label>
                    </div>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Jane Doe'
                        className='contact-input'
                        required
                        onBlur={() => setNameTouched(true)}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameTouched && name.length <= 4 && (
                        <span className='contact-validation button-text'>
                            Your name must be more than 4 characters long
                        </span>
                    )}
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                        <label className='post-text' htmlFor='email'>
                            Your email
                            <span className='contact-required'>*</span>
                        </label>
                    </div>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='janedoe@email.com'
                        className='contact-input'
                        required
                        onBlur={() => setEmailTouched(true)}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailTouched && !isEmailValid && (
                        <span className='contact-validation button-text'>
                            Your email address must be in format: email@example.com
                        </span>
                    )}
                    {emailTouched && email === '' && (
                        <span className='contact-validation button-text'>
                            Email is required
                        </span>
                    )}
                    <div className='form-label'>
                        <FontAwesomeIcon icon={faMessage} className='contact-icon' />
                        <label className='post-text' htmlFor='message'>
                            Your message
                            <span className='contact-required'>*</span>
                        </label>
                    </div>
                    <textarea
                        id='message'
                        name='message'
                        className='contact-message'
                        placeholder='I wanted to ask about...'
                        required
                        onBlur={() => setMessageTouched(true)}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    {messageTouched && message === '' && (
                        <span className='contact-validation button-text'>
                            You can't send an empty message
                        </span>
                    )}
                    <input className='contact-submit' type='submit' value='Send' disabled={name.length <= 4 || !isEmailValid || message === ''} />
                </>
            }
            {submitMessage &&
                <>
                    <p className='contact-submit-message'>{submitMessage}</p>
                    <button
                        className='contact-another-message'
                        onClick={() => setSubmitMessage('')}
                    >
                        Send another message
                    </button>
                </>
            }
        </form>
    );
};

export default ContactForm;