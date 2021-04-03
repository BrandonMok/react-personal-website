import React from 'react';
import GithubLogo from '../icons/github.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import DocIcon from '../icons/cv.svg';


class MoreInfo extends React.Component {
    render() {
        return (
            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="more-info__top">
                                <div className="more-info__top__title">More Info</div>
                                <div className="more-info__top__line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-center align-items-center more-info__bottom-container">
                                <div className="more-info__bottom-container__box">
                                    <img src={GithubLogo} alt="Github Logo" /> 
                                </div>
                                <div className="more-info__bottom-container__box">
                                    <img src={LinkedInLogo} alt="LinkedIn Logo" /> 
                                </div>
                                <div className="more-info__bottom-container__box">
                                    <img src={DocIcon} alt="Document icon" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MoreInfo;