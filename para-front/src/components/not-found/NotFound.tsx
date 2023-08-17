import React from 'react';
import './notFound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ghost from '../../assets/not-found/ghost.png'

const NotFoundPage: React.FC = () => {
    return (
        <section className='error-container'>
            <div className='error'>
                <img className='error-img' src={ghost} alt='Graffiti ghost' />
                <div className='error-description'>
                    <h1 className='error-title'>Oh no!</h1>
                    <p>
                        Looks like you've ventured into uncharted territory - a paranormal pit stop on the digital plane.
                        Our ethereal beings must have moved the page you seek to a hidden dimension.
                    </p>
                    <p>
                        But fear not, curious soul! Embrace the mysterious and continue your journey through our supernatural archives.
                    </p>
                    <a href='#' className='error-button'>
                        Go to Home
                        <FontAwesomeIcon className='icon' icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
