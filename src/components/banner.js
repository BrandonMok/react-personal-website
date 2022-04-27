import React from 'react';
import Avatar from 'avataaars'

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
                    <Avatar
                        avatarStyle='Circle'
                        topType='ShortHairTheCaesar'
                        accessoriesType='Prescription02'
                        hairColor='Black'
                        facialHairType='Blank'
                        clotheType='ShirtCrewNeck'
                        clotheColor='Heather'
                        eyeType='Happy'
                        eyebrowType='Default'
                        mouthType='Smile'
                        skinColor='Light'
                    />
                </div>                
            </div>
        </div>
    );
}

export default Banner;
