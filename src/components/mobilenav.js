import React from 'react';

const Mobilenav = ({onClick}) => {
    return (
        <div id="mobile-nav">
            <ul id="mobile-nav-items">
                <li><a href="#aboutme" alt="About" onClick={() => onClick(prev => !prev)}>about</a></li>
                <li><a href="#skills" alt="Skills" onClick={() => onClick(prev => !prev)}>skills</a></li>
            </ul>
        </div>
    );
}
export default Mobilenav;