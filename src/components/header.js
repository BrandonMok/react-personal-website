import logo from '../logo.png';
import React from 'react';


/**
 * Header
 * @returns Array
 */
class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex justify-content-between flex-direction-row">
                <div className="header__logo__row">
                    <img src={logo} alt="logo" className="header__logo__row__image" />
                </div>
                <div className="header__menu__row">
                    <ul className="main-menu">
                        <li><a href="#about" alt="About">About</a></li>
                        <li><a href="#projects" alt="About">Projects</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}


// function Header() {
//     return (
//         <div className="header d-flex justify-content-between flex-direction-row">
//             <div className="header__logo__row">
//                 <img src={logo} alt="logo" className="header__logo__row__image" />
//             </div>
//             <div className="header__menu__row">
//                 <ul className="main-menu">
//                     <li><a href="#about" alt="About">About</a></li>
//                     <li><a href="#projects" alt="About">Projects</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
export default Header;
