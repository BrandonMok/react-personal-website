import React from 'react';

export default function SectionTitle({title}){
    return (
        <div className="section-title">
            <div className="section-title__title">{title}</div>
            <div className="section-title__accentLine"></div>
        </div>
    );
}
