import React from 'react';
import BannerImg from '../icons/undraw_traveling.svg';

 class Banner extends React.Component {
    render() {
        return (
            <div className="banner d-flex justify-content-around align-items-center p-4">
                <div className="banner__text">
                    <div className="banner__text__title">Hello, I'm Brandon!</div>
                </div>
                <div className="banner__image">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
         );
    }
}
export default Banner;
