import React from 'react';
import $ from 'jquery';

const Mobilenav = () => {
    
    const updateMobileNav = () => {
        $("#mobile-nav").css("width", "0");
    }

    return (
        <div id="mobile-nav">
            <ul id="mobile-nav-items">
                <li><a href="#aboutme" alt="About" onClick={() => updateMobileNav()}>About</a></li>
                <li><a href="#skills" alt="Skills" onClick={() => updateMobileNav()}>Skills</a></li>
                <li><a href="#moreinfo" alt="More Info" onClick={() => updateMobileNav()}>More</a></li>
            </ul>
        </div>
    );
}
export default Mobilenav;