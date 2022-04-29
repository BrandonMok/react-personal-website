import React from 'react';
import AvatarPic from '../icons/avatar.svg'
import GithubLogo from '../icons/github.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import SF from '../icons/salesforce.svg';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-6 banner__headline-intro'>
                        <div className='banner__headline-intro__subheadline'>Hello, I'm</div>
                        <div className='banner__headline-intro__headline'>Brandon Mok</div>
                        <div className='banner__headline-intro__subheadline'>Full-stack Developer</div>
                    </div>
                    <div className='col-12 col-md-6 banner__avatar'>
                        <img src={AvatarPic} alt='avatar' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 banner__socials'>
                        <div className="banner__socials__item">
                            <a href="https://github.com/brandonmok" target="_blank" rel="noreferrer" alt="GitHub link">
                                <img src={GithubLogo} alt="Github Logo" /> 
                            </a>
                        </div>
                        <div className="banner__socials__item">
                            <a href="https://www.linkedin.com/in/brandonmok" target="_blank" rel="noreferrer" alt="Linkedin profile link">
                                <img src={LinkedInLogo} alt="LinkedIn Logo" /> 
                            </a>
                        </div>
                        <div className="banner__socials__item">
                            <a href="https://trailblazer.me/id/brmok" target="_blank" rel="noreferrer" alt="TrailBlazer link">
                                <img src={SF} alt="Salesforce Logo" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
