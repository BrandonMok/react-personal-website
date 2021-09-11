import React from 'react';
import Profile from '../icons/profile.png';

class About extends React.Component {
    render() {
        return (
            <div className="about container" id="about">
                <div className="row">
                    <div className="col-12 col-lg-8 p-4">
                        <div className="about__title__content">
                            <div className="about__title__content__title">About</div>
                            <div className="about__title__content__line"></div>
                        </div>
                        <div className="about__text">
                            I'm a full-stack software developer with a BS in Web & Mobile Computing (WMC).
                            I have experience working in a variety of areas such as full-stack web development, 
                            object orientated programming, databases, content management systems (Drupal & WordPress), Salesforce, and more.
                            Additionally, I'm proficient in utilizing skills in HTML, CSS, JavaScript, PHP, SQL, Java, and C#.
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 about__img__div p-4">
                        <img src={Profile} alt="Brandon in suit smiling" />
                    </div>
                </div>
            </div>
        );
    }
}
export default About;