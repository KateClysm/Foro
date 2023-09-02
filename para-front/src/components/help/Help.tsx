import React from 'react';
import './help.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Help: React.FC = () => {

    return (
        <section className="help">
            <h1 className="help-head">Help</h1>
            <div className="help-question">
                <FontAwesomeIcon icon={faQuestion} className="help-icon" />
                <h2>
                    How do I create an account?
                </h2>
            </div>
            <ol className="help-list">
                <li>
                    Click the “Register” button on the top right of your screen.
                </li>
                <li>
                    Create an account with an email and password.
                </li>
                <li>
                    If you want, you can click the “My User” button on the top right of your screen to customize it and see your posts!
                </li>
            </ol>
            <div className="help-question">
                <FontAwesomeIcon icon={faQuestion} className="help-icon" />
                <h2>
                    How do I create a new post?
                </h2>
            </div>
            <ol className="help-list">
                <li>
                    If you're not already a member, you'll need to create an account or log in to your existing one.
                </li>
                <li>
                    Once you're logged in, head over to our home page. You can find it in the navigation menu.
                </li>
                <li>
                    On the bottom right corner, you'll notice a button labeled "New Post". Click on it to begin crafting your post.
                </li>
                <li>
                    Take a moment to explore our various categories. Select the one that best fits the subject of your post. Whether it's ghostly encounters, witchcraft, premonitions, or any other paranormal topic, there's a spot for you!
                </li>
                <li>
                    Give your post a captivating title that reflects the essence of your content. In the body of the post, share your story, thoughts, questions, or discoveries related to the paranormal.
                </li>
                <li>
                    When you're satisfied with your creation, hit the "Submit" button. Congratulations! Your post is now live for the entire ParaSeekers community to see and engage with.
                </li>
                <li>
                    Engage with fellow seekers, keep an eye on the comments section of your post to interact with other members who may have questions, insights, or shared experiences.
                </li>
            </ol>
            <div className="help-question">
                <FontAwesomeIcon icon={faQuestion} className="help-icon" />
                <h2>
                    What do I do if I need technical support?
                </h2>
            </div>
            <p>
                You can do this in two ways:
            </p>
            <ol className="help-list">
                <li>
                    Send us an email at <a className="help-link" href="mailto:support@paraseekers.com">support@paraseekers.com</a> with a detailed description of the problem you're facing. Be sure to provide any relevant information that might help us better understand the issue.
                </li>
                <li>
                    Fill out the contact form in the “Contact” section. Simply fill it out with the necessary details, and our team will get back to you as soon as possible.
                </li>
            </ol>
            <div className="help-question">
                <FontAwesomeIcon icon={faQuestion} className="help-icon" />
                <h2>
                    What if my question or problem is not here?
                </h2>
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
    );
}

export default Help;
