import React, {useState, useRef, useEffect} from 'react';

export default function Mobilenav() {
    const [ openMobileNav, setOpenMobileNav ] = useState(false);
    const mobileNav = useRef();
  
    useEffect(() => {
        let percentWidth = openMobileNav ? "45%" : "0";
        mobileNav.current.style.width = percentWidth;
    },[openMobileNav]);

    function handleMobileNavClick() {
        console.log("clicked!");
        setOpenMobileNav(prev => !prev);
    }

    return (
        <div className="mobile-nav">
            <span className="mobile-nav__hamburger" onClick={handleMobileNavClick}>&#9776;</span>

            <div ref={mobileNav} className="mobile-nav__items">
                <ul className="mobile-nav__items__list">
                    <li><a href="#aboutme" alt="About" onClick={handleMobileNavClick}>about</a></li>
                    <li><a href="#skills" alt="Skills" onClick={handleMobileNavClick}>skills</a></li>
                </ul>
            </div>
        </div>
    );
}
