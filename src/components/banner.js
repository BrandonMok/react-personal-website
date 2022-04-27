import React from 'react';
import AvatarPic from '../icons/avatar.svg'


const Banner = () => {
    return (
        <div className="banner">
            <div className="container banner__flexbox">
                <div className='banner__flexbox__box1'>
                    <div className='banner__flexbox__box1__headline-content'>
                        <div className='banner__flexbox__box1__headline-content__subheadline'>Hello, I'm</div>
                        <div className='banner__flexbox__box1__headline-content__headline'>Brandon Mok</div>
                        <div className='banner__flexbox__box1__headline-content__subheadline'>Fullstack Developer</div>
                    </div>        
                </div>        
                <div className='banner__flexbox__box2'>
                    <img src={AvatarPic} alt='avatar' />
                </div>                
            </div>
        </div>
    );
}

export default Banner;
