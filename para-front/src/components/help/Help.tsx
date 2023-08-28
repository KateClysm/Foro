import React from 'react';
import './help.css';

const Help: React.FC = () => {

  return (
    <div className="container-general">
      <div className="aside-nav">
        <ul className="principal-page">
          <li className="access"><a href="#">Home</a></li>
          <li className="access"><a href="#">Popular</a></li>
        </ul>
        <div className="padding-divider">
          <div className="divider"></div>
        </div>
        <ul className="topics">
          <li className="access"><a href="#">Ghosts</a></li>
          <li className="access"><a href="#">Witchcraft</a></li>
          <li className="access"><a href="#">Demons</a></li>
          <li className="access"><a href="#">Mythological</a></li>
          <li className="access"><a href="#">Past Life Regression</a></li>
          <li className="access"><a href="#">Shadow People</a></li>
          <li className="access"><a href="#">Fairy Folklore</a></li>
          <li className="access"><a href="#">Premonitions and Prophecies</a></li>
          <li className="access"><a href="#">Zombies</a></li>
          <li className="access"><a href="#">Black Magic</a></li>
          <li className="access"><a href="#">Vudu Magic</a></li>
          <li className="access"><a href="#">Tulpas</a></li>
        </ul>
        <div className="padding-divider">
          <div className="divider"></div>
        </div>
        <ul className="secondary-page">
          <li className="access popular-red"><a href="#">About us</a></li>
          <li className="access"><a href="#">Contact</a></li>
          <li className="access"><a href="#">Help</a></li>
        </ul>
      </div>
      <section className="help">
        <h1 className="help-head">Help</h1>
        <div className="help-question">
          <i className="fa-solid fa-question"></i>
          <h2>How do I create an account?</h2>
        </div>
        <ol className="help-list">
          <li>Click the “Register” button on the top right of your screen.</li>
          <li>Create an account with an email and password.</li>
          <li>If you want, you can click the “My User” button on the top right of your screen to customize it and see your posts!</li>
        </ol>
        <div className="help-question">
          <i className="fa-solid fa-question"></i>
          <h2>How do I create a new post?</h2>
        </div>
        <ol className="help-list">
          <li>
            If you're not already a member, you'll need to create an account or log in to your existing one.
          </li>
          {/* Rest of the steps */}
        </ol>
        <div className="help-question">
          <i className="fa-solid fa-question"></i>
          <h2>What do I do if I need technical support?</h2>
        </div>
        <p>You can do this in two ways:</p>
        <ol className="help-list">
          {/* Steps for technical support */}
        </ol>
        <div className="help-question">
          <i className="fa-solid fa-question"></i>
          <h2>What if my question or problem is not here?</h2>
        </div>
        <p>
          If you find that your question or problem is not addressed within our Help Section, fear not! At ParaSeekers, we're always here to assist and guide you on your journey into the unknown.
        </p>
        <p>
          You can click the button down below and head over to our “Contact” section!
        </p>
        <a className="help-button" href="contact.html">
          Go to Contact
        </a>
      </section>
    </div>
  );
}

export default Help;
