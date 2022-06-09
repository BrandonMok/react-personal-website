import React from 'react';
import SpaceImg from '../icons/undraw_outer_space.svg';
import SectionTitle from './sectionTitle';

export default function About() {
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
                            I build custom solutions for content management systems and tackle business problems with Salesforce.
                            My experience, however, spans across a diverse range of areas consisting of web development, OOP, CMS, CRM, databases, and frameworks. 
                            <br />
                            <br />
                            Besides tech, some of my other interests involve building custom keyboards, working on cars, and learning more about other industries, trades, and skills.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
