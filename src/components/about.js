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
                            I'm Brandon, and I'm a full stack developer based out of New York.
                            <br />
                            <br />
                            I graduated from the Rochester Institute of Technology in 2017 with a Bachelors in Web & Mobile Computing. 
                            During my college career, I focused on becoming a LAMP developer with knowledge in building full stack web applications.
                            My work can be found on my <a href="https://github.com/BrandonMok" alt="Github">GitHub</a> which consists anywhere from
                            front and backend applications, APIs (JS & Java), Java networking, IOS and Android mobile apps, and more.
                            <br />
                            <br />
                            Since college, I've quickly expanded and branched my knowledge to encompass a broader skillset. My full experience now involves
                            web development, object-oriented programming, content management systems (Drupal & WordPress), customer relationship management tools (Salesforce), databases, and frameworks. 
                            Additionally, most of my past production work experience comes from developing custom solutions for content management systems and solving business problems with Salesforce.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
