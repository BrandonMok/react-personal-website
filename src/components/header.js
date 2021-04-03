import logo from '../logo.png';
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex justify-content-between flex-direction-row">
                <div className="header__logo-row">
                    <span id="hamburger" onClick={this.props.onClick}>&#9776;</span>
                    <img src={logo} alt="logo" className="header__logo-row__image" />
                    <div className="header__logo-row__name">Brandon Mok</div>
                </div>
                <div className="header__menu-row">
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
