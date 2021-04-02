import React from 'react';
import JSLogo from '../icons/logo-javascript.svg';
import PHPLogo from '../icons/php-logo.svg';

class PrimaryTechnologies extends React.Component {
    render() {
        return (
            <div className="primary-tech">
                <div className="container">
                    <div className="row">
                        <div className="primary-tech__top">
                            <div className="primary-tech__top__title">Primary Technologies</div>
                            <div className="primary-tech__top__line"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex primary-tech__boxes-container">
                            <div className="primary-tech__boxes-container__box">
                                <img src={JSLogo} alt="Javascript logo" />
                            </div>

                            <div className="primary-tech__boxes-container__box">
                                <img src={PHPLogo} alt="PHP logo" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrimaryTechnologies;