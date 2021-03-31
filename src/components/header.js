import logo from '../logo.png';

/**
 * Header
 * @returns Array
 */
function Header() {
    return (
        <div class="header d-flex flex-direction-row">
            <div class="header__logo__row">
                <img src={logo} alt="logo" class="header__logo__row__image" />
            </div>
            <div class="">
                menu goes here
            </div>
        </div>
    );
}
export default Header;
