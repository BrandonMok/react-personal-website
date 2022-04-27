import React from 'react';
import MobileNav from './mobilenav';

class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex justify-content-between flex-direction-row">
                <div className="header__logo-row">
                    <div className="header__logo-row__name">Brandon Mok</div>
                </div>
                <div className="header__menu-row">
                    <ul className="main-menu">
                        <li><a href="#aboutme" alt="About">About</a></li>
                        <li><a href="#skills" alt="Skills">Skills</a></li>
                        <li><a href="#moreinfo" alt="More Info">More</a></li>
                    </ul>
                    <span id="hamburger" onClick={this.props.onClick}>&#9776;</span>
                    <MobileNav />
                </div>
            </div>
        );
    }
}
export default Header;
