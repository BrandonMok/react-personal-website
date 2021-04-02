import React from 'react';
import Profile from '../icons/profile.png';

class About extends React.Component {
    render() {
        return (
            <div className="about container" id="about">
                <div className="row">
                    <div className="col-12 col-md-8 p-4">
                        <div className="about__title__content">
                            <div className="about__title__content__title">About</div>
                            <div className="about__title__content__line"></div>
                        </div>
                        <div className="about__text">
                            I'm a full stack software developer majoring in Web & Mobile Computing at RIT. 
                            I have experience working in a wide variety of areas that include but are not limited to 
                            full stack web development, CMS work mainly with Drupal, Laravel, object-orientated programming, databases, 
                            and both android and ios mobile application development. I'm always open and interested in broadening
                            my horizons to learn different technologies and ways of building applications like with this site as 
                            it provided an opportunity to learn more about React.
                        </div>
                    </div>
                    <div className="col-12 col-md-4 about__img__div p-4">
                        <img src={Profile} alt="Man in suit smiling" />
                    </div>
                </div>
            </div>
        );
    }
}
export default About;