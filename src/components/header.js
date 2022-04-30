import React, { useState, useEffect} from 'react';
import MobileNav from './mobilenav';
import Logo from '../icons/logo.png';
import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

const Header = () => {
    const [ openMobileNav, setOpenMobileNav ] = useState(false);
  
    useEffect(() => {
        let percentWidth = openMobileNav ? "45%" : "0";
        $("#mobile-nav").css("width", percentWidth);
    },[openMobileNav]);

    return (
        <div className="header d-flex justify-content-between flex-direction-row">
            <div className="header__logo-row">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__menu-row">
                <ul className="main-menu">
                    <li><a href="#aboutme" alt="About">About</a></li>
                    <li><a href="#skills" alt="Skills">Skills</a></li>
                </ul>

                <span id="hamburger" onClick={() => setOpenMobileNav(prev => !prev)}>&#9776;</span>
                <MobileNav onClick={setOpenMobileNav} />
            </div>
        </div>
    );
}
export default Header;
