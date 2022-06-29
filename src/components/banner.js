import React, {useEffect} from 'react';
import AvatarPic from '../icons/avatar.svg'
import GithubLogo from '../icons/github.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import SFLogo from '../icons/salesforce.svg';
import anime from 'animejs/lib/anime.es.js';

export default function Banner() {

    useEffect(() => {
        anime.timeline({
            easing: 'easeOutExpo',
        })
        .add({
            targets: '.banner__socials__item',
            scale: 1.25,
            delay: 1000
        })
        .add({
            targets: '.banner__socials__item',
            scale: 1,
            rotate: '1turn',
            delay: 500
        });

    }, []);

    return (
        <div className="banner">
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-6 banner__headline-intro'>
                        <div className='banner__headline-intro__subheadline'>Hello, I'm</div>
                        <div className='banner__headline-intro__headline'>Brandon Mok</div>
                        <div className='banner__headline-intro__subheadline'>Full Stack Developer</div>
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
                                <img src={SFLogo} alt="Salesforce Logo" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
