import React from 'react';


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
                                <i className="fab fa-bootstrap"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PrimaryTechnologies;