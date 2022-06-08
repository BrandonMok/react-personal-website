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
                            I'm Brandon, and I'm a full stack developer.
                            I build custom solutions for content management systems and tackle pressing business problems with Salesforce.
                            My experience spans across a diverse range of areas consisting of web development, OOP, CMS, CRM, databases, and frameworks. 
                            I also enjoy learning new technologies, and I'm always looking into new areas.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;