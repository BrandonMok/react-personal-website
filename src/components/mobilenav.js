import React from 'react';

const Mobilenav = ({onClick}) => {
    return (
        <div id="mobile-nav">
            <ul id="mobile-nav-items">
                <li><a href="#aboutme" alt="About" onClick={() => onClick(prev => !prev)}>About</a></li>
                <li><a href="#skills" alt="Skills" onClick={() => onClick(prev => !prev)}>Skills</a></li>
            </ul>
        </div>
    );
}
export default Mobilenav;