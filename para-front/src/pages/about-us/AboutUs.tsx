import React from 'react';
import './aboutUs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faMagnifyingGlass, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const AboutUs: React.FC = () => {
    return (
        <section className='about'>
            <h1 className='about-head'>About Us</h1>
            <p className='about-subtitle'>
                Welcome to ParaSeekers - Your Gateway to the Unseen!
            </p>
            <p>
                We are a passionate community of fearless individuals united by our insatiable curiosity about the mysterious and the unexplained. Our forum serves as a haven for all those intrigued by the paranormal, offering a safe and welcoming space to share, explore, and discuss the extraordinary realms that lie beyond the confines of the known.
            </p>
            <div className='about-title'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='about-icon' />
                <h2>Who We Are</h2>
            </div>
            <p>
                ParaSeekers is a diverse group of open-minded enthusiasts, ranging from seasoned paranormal investigators to curious novices eager to embark on their first otherworldly adventure. We hail from all walks of life, each bringing a unique perspective to the table. Our common bond is the relentless pursuit of truth, unwavering in our commitment to unraveling the enigmas that surround us.
            </p>
            <div className='about-title'>
                <FontAwesomeIcon icon={faLightbulb} className='about-icon' />
                <h2>Our Mission</h2>
            </div>
            <p>
                At the heart of ParaSeekers lies a profound mission - to shed light on the shadowy corners of the inexplicable. We are dedicated to investigating and documenting the unexplained phenomena that have puzzled humanity for generations. Whether it's paranormal encounters, ghostly sightings, premonitions, or encounters with mythological creatures, we are resolute in our quest to discern fact from fiction and decipher the mysteries that elude conventional understanding.
            </p>
            <div className='about-title'>
                <FontAwesomeIcon icon={faGhost} className='about-icon' />
                <h2>Join Us</h2>
            </div>
            <p>
                Whether you are an intrepid explorer of the unexplained, a seasoned investigator, or just someone with a profound interest in the paranormal, ParaSeekers invites you to join our community. Expand your horizons, share your encounters, and become part of a group that is relentless in its pursuit of the truth.
            </p>
            <p>
                Remember, the journey into the unknown is best taken together.
            </p>
        </section>
    );
};

export default AboutUs;