import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className="section-title">
            <div className="section-title__title">{title}</div>
            <div className="section-title__accentLine"></div>
        </div>
    );
}
export default SectionTitle;