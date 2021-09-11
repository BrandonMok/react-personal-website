import React from 'react';
import BannerImg from '../icons/undraw_traveling.svg';

 class Banner extends React.Component {
    render() {
        return (
            <div className="banner d-flex justify-content-around align-items-center p-4">
                <div className="banner__text">
                    <div className="banner__text__title">Hi, I'm Brandon!</div>
                    <div className="banner__text__subtext">Full-stack developer</div>
                </div>
                <div className="banner__image">
                    <img src={BannerImg} alt="Picture of Brandon in a business suit." />
                </div>
            </div>
         );
    }
}
export default Banner;
