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
                            <img src={SpaceImg} alt="Man in a suit" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 aboutme__content-col'>
                        <SectionTitle title="About Me" />
                        <div className='aboutme__content-col__content'>
                            I'm a full-stack developer that loves to learn and expand my knowledge. 
                            I have experience working in a variety of areas such as full-stack web development,
                            object-oriented programming, databases, content management systems (Drupal and Wordpress), 
                            frameworks (Laravel and some React), and Salesforce (CRM, Experience Cloud, and Service Cloud).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;