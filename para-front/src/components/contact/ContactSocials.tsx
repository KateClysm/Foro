import React from 'react';
import instagramIcon from '../../assets/contact/instagram.png'
import facebookIcon from '../../assets/contact/facebook.png'
import twitterIcon from '../../assets/contact/twitter.png'
import mailIcon from '../../assets/contact/mail.png'

const ContactSocials: React.FC = () => {

    return (
        <div className='contact-socials'>
            <a href='#' className='social post-text'>
                <img className='contact-logo' src={instagramIcon} alt='instagram logo' />
                @Para_seekers
            </a>
            <a href='#' className='social post-text'>
                <img className='contact-logo' src={mailIcon} alt='mail logo' />
                Paraseekers@gmail.com
            </a>
            <a href='#' className='social post-text'>
                <img className='contact-logo' src={twitterIcon} alt='twitter logo' />
                Para/seekers_ok
            </a>
            <a href='#' className='social post-text'>
                <img className='contact-logo' src={facebookIcon} alt='facebook logo' />
                Paraseekers_official
            </a>
        </div>
    );
};

export default ContactSocials;