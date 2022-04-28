import React from 'react';
import SectionTitle from './sectionTitle';
import PercentageImg from '../icons/undraw_percentage.svg';

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-6 skills__content-col'>
                        <SectionTitle title="Skills" />  

                        <div className='skills__content-col__content container'>
                            <div className='row skills__content-col__content__FEBE-row'>
                                <div className='col-12 col-md-6'>
                                    <div className='skills__content-col__content__FEBE-row__FE'>
                                        <div className=''>Frontend</div>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS / SASS</li>
                                            <li>Javascript</li>
                                            <li>Bootstrap</li>
                                            <li>JQuery</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='skills__content-col__content__FEBE-row__BE'>
                                        <div>Backend</div>
                                        <ul>
                                            <li>PHP</li>
                                            <li>SQL</li>
                                            <li>Lando (Docker)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='row skills__content-col__content__other-row'>
                                <div className='col-12'>
                                    <div>Other</div>
                                    <ul>
                                        <li>Salesforce</li>
                                        <li>Laravel</li>
                                        <li>Drupal</li>
                                        <li>WordPress</li>
                                        <li>React</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 skills__image-col'>
                        <div className='skills__image-col__image-container'>
                            <img src={PercentageImg} alt="Man next to horizontal progress bars" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;