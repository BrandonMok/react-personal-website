import React from 'react';
import MobileNav from './mobilenav';
import Logo from '../icons/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header__flexbox">
                <div className="header__flexbox__logo-row">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="header__flexbox__menu-row">
                    <ul className="main-menu">
                        <li><a href="#aboutme" alt="About">about</a></li>
                        <li><a href="#skills" alt="Skills">skills</a></li>
                    </ul>

                    <MobileNav />
                </div>
            </div>
        </div>
    );
}
export default Header;
