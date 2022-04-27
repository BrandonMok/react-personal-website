import React from 'react';

class SectionTitle extends React.Component {
    render() {
        return (
            <div className="section-title">
                <div className="section-title__title">{this.props.title}</div>
                <div className="section-title__accentLine"></div>
            </div>
        );
    }
}
export default SectionTitle;