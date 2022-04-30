import React from 'react';
import SpaceImg from '../icons/undraw_outer_space.svg';
import SectionTitle from './sectionTitle';

const About = () => {
    return (
        <div className='aboutme' id='aboutme'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 aboutme__image-col'>
                        <div className='aboutme__image-col__image-container'>
                            <img src={SpaceImg} alt="Rocket ship in space" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 aboutme__content-col'>
                        <SectionTitle title="About Me" />
                        <div className='aboutme__content-col__content'>
                            Hi there! I'm Brandon Mok, and I'm a full-stack developer!
                            <br/>
                            I enjoy learning new technologies, frameworks, and concepts while also
                            continually looking for the next problem to solve.
                            I've explored working in a diverse range of areas like
                            web development, object-oriented programming, databases,
                            content management systems (Drupal and WordPress), frameworks (Laravel and some React),
                            and Salesforce (CRM, Experience Cloud, and Service Cloud).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;