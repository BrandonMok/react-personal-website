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

        // <div className='home-banner'>
        //     <div className='container home-banner__container'>
        //         <div className='home-banner__container__heading-info'>
        //             <div className='home-banner__container__heading-info__name'>
        //                 Brandon Mok
        //             </div>
        //             <div className='home-banner__container__heading-info__title'>
        //                 Fullstack Developer
        //             </div>
        //         </div>
        //     </div>
        //     <div className='home-banner__shapes'>
        //         <div className='home-banner__shapes__blTriangle'></div>
        //         {/* <div className='home-banner__shapes__trTriangle'></div> */}
        //     </div>
        // </div>
    );
}

export default Banner;
