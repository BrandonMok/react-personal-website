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
                            I have experience working in a diverse range of areas consisting of web development, OOP, CMS, CRM, and frameworks. 
                            Additionally, I enjoy learning new technologies, processes, and tools for which I'm always researching and learning new things.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;