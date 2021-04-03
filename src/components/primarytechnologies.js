import React from 'react';
import JSLogo from '../icons/javascript.svg';
import PHPLogo from '../icons/php.svg';
import DrupalLogo from '../icons/drupal.svg';
import BootStrapLogo from '../icons/bootstrap.svg';
import SASSLogo from '../icons/sass.svg';
import CSSLogo from '../icons/css3.svg';


class PrimaryTechnologies extends React.Component {
    render() {
        return (
            <div className="primary-tech" id="tech">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="primary-tech__top">
                                <div className="primary-tech__top__title">Primary Technologies</div>
                                <div className="primary-tech__top__line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap primary-tech__boxes-container justify-content-center align-items-center">
                                <div className="primary-tech__boxes-container__box">
                                    <img src={DrupalLogo} alt="Drupal logo" />
                                </div>
                                <div className="primary-tech__boxes-container__box">
                                    <img src={PHPLogo} alt="PHP logo" />
                                </div>
                                <div className="primary-tech__boxes-container__box">
                                    <img src={JSLogo} alt="Javascript logo" />
                                </div>
                                <div className="primary-tech__boxes-container__box">
                                    <img src={BootStrapLogo} alt="Bootstrap logo" />
                                </div>
                                <div className="primary-tech__boxes-container__box">
                                    <img src={SASSLogo} alt="SASS logo" />
                                </div>
                                <div className="primary-tech__boxes-container__box">
                                    <img src={CSSLogo} alt="CSS logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrimaryTechnologies;