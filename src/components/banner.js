import React from 'react';
import AvatarPic from '../icons/avatar.svg'


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
            </div>
        </div>
    );
}

export default Banner;
