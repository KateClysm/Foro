import React from 'react';
import './footer.css'
import logoNavWhite from '../../assets/logoNavWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="inside-footer">
        <div className="footer-logo">
          <img src={logoNavWhite} alt="Logo ParaSeekers" />
        </div>

        <div className="footer-text">
          <p>
            This site was skillfully crafted by a team of talented developers. We invite you to explore the magic behind the scenes by visiting our GitHub repository, where you can find the code that powers this website. Additionally, you can get a glimpse of our design process and prototypes on Figma. Join us on this exciting journey of creativity and innovation!
          </p>

          <div className="footer-icons">
            <a href="#">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faFigma} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;