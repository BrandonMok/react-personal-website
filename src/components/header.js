import logo from '../logo.png';
import React from 'react';
import $ from 'jquery';

class Header extends React.Component {
    openNav() {
        $("#mobile-nav").css("width", "80%");
        $("#mobile-nav").css("z-index", "10");
    }
    closeNav() {
        $("#mobile-nav").css("width", "0");
        $("#mobile-nav").css("z-index", "0");
    }

    render() {
        return (
            <div className="header d-flex justify-content-between flex-direction-row">
                <div className="header__logo-row">
                    <span id="hamburger" onClick={this.openNav}>&#9776;</span>
                    <img src={logo} alt="logo" className="header__logo-row__image" />
                    <div className="header__logo-row__name">Brandon Mok</div>
                </div>
                <div className="header__menu-row">
                    <div id="mobile-nav">
                        <span id="closebtn" onClick={this.closeNav}>&times;</span>
                        <ul id="mobile-nav-items">
                            <li><a href="#about" onClick={this.closeNav}>About</a></li>
                            <li><a href="#projects" onClick={this.closeNav}>Projects</a></li>
                        </ul>
                    </div>

                    <ul className="main-menu">
                        <li><a href="#about" alt="About">About</a></li>
                        <li><a href="#projects" alt="About">Projects</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Header;
