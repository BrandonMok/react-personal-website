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
                            Hi there - I'm Brandon Mok, and I'm a full-stack developer!
                            I enjoy learning new technologies, and I'm always looking for the next problem to solve.
                            I have experience working in a diverse range of areas consisting anywhere from 
                            full-stack web development to content management systems and lastly to CRMs.
                            With each step of the way, I've thoroughly enjoyed expanding my skills and
                            learning new things!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;