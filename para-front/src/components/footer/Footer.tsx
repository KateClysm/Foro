import React from 'react';
import './footer.scss'
import logoNavWhite from '../../assets/logoNavWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="footer-inside">
        <div className="footer-logo">
          <img src={logoNavWhite} alt="Logo ParaSeekers" />
        </div>

        <div className="footer-text">
          <h2>
            This site was skillfully crafted by a team of talented developers. We invite you to explore the magic behind the scenes by visiting our GitHub repository, where you can find the code that powers this website. Additionally, you can get a glimpse of our design process and prototypes on Figma. Join us on this exciting journey of creativity and innovation!
          </h2>

          <div className="footer-icons">
            <a href="#">
                <FontAwesomeIcon icon={faGithub} className='footer-icon'/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faFigma} className='footer-icon'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;