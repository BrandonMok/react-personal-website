import React from 'react';
import BannerImg from '../icons/undraw_traveling.svg';

 class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <div className='container'>
                    <div className="banner__flexbox d-flex align-items-center">
                        <div className="banner__flexbox__text">
                            <div className="banner__flexbox__text__title">Hi, I'm Brandon!</div>
                            <div className="banner__flexbox__text__subtext">Full-stack developer</div>
                        </div>
                        <div className="banner__flexbox__image">
                            <img src={BannerImg} alt="Helpers around a moon." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;
