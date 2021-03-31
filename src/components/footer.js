import React from 'react';
import GitHubIcon from '../icons/github.svg';

 class Footer extends React.Component {
    render() {
        return (
            <div className="footer d-flex flex-column justify-content-center align-items-center">
                <div className="footer_copyright">Copyright &copy; 2021 Brandon Mok</div>
                <div className="footer__icons">
                    <div className="footer__icons__github">
                        <a href="https://github.com/BrandonMok" alt="Link to Brandon Mok's GitHub"> 
                            <img src={GitHubIcon} alt="Github Icon" className="footer-icon" />
                        </a> 
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
