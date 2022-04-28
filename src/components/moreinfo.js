import GithubLogo from '../icons/github.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import SF from '../icons/salesforce.svg';
import SectionTitle from './sectionTitle';

const MoreInfo = () => {
    return (
        <div className="more-info" id="moreinfo">
            <div className="container">
                <div className="row more-info__title-row">
                    <div className="col-12">
                        <SectionTitle title="More Info" />
                    </div>
                </div>
                <div className="row more-info__icon-row">
                    <div className="d-flex more-info__icon-row__flexbox">
                        <div className="more-info__icon-row__flexbox__item">
                            <a href="https://github.com/brandonmok" target="_blank" rel="noreferrer" alt="GitHub link">
                                <img src={GithubLogo} alt="Github Logo" /> 
                            </a>
                        </div>
                        <div className="more-info__icon-row__flexbox__item">
                            <a href="https://www.linkedin.com/in/brandonmok" target="_blank" rel="noreferrer" alt="Linkedin profile link">
                                <img src={LinkedInLogo} alt="LinkedIn Logo" /> 
                            </a>
                        </div>
                        <div className="more-info__icon-row__flexbox__item">
                            <a href="https://trailblazer.me/id/brmok" target="_blank" rel="noreferrer" alt="TrailBlazer link">
                                <img src={SF} alt="Salesforce Logo" /> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default MoreInfo;