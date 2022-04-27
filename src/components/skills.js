import React from 'react';
import SectionTitle from './sectionTitle';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills" id="skills">
                <div className="skills__container container">
                    <div className='row skills__container__title-row'>
                        <div className='col-12'>
                            <SectionTitle title="Skills" />     
                        </div>
                    </div>
                    <div className='row skills__container__items-row'>
                        <div className="col col-12 col-md-4">
                            <div className="skills__container__items-row__item">HTML</div>
                            <div className="skills__container__items-row__item">CSS/SCSS</div>
                            <div className="skills__container__items-row__item">Javascript</div>
                            <div className="skills__container__items-row__item">PHP</div>
                            <div className="skills__container__items-row__item">SQL</div>
                        </div>
                        <div className="col col-12 col-md-4">
                            <div className="skills__container__items-row__item">Salesforce</div>
                            <div className="skills__container__items-row__item">Apex</div>
                            <div className="skills__container__items-row__item">SOQL</div>
                            <div className="skills__container__items-row__item">Aura & LWC</div>
                            <div className="skills__container__items-row__item">SOQL</div>
                        </div>
                        <div className="col col-12 col-md-4">
                            <div className="skills__container__items-row__item">Drupal</div>
                            <div className="skills__container__items-row__item">Laravel</div>
                            <div className="skills__container__items-row__item">React</div>
                            <div className="skills__container__items-row__item">Java</div>
                            <div className="skills__container__items-row__item">C#</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skills;