import React from 'react';
import SectionTitle from './sectionTitle';
import LostInSpaceImg from '../icons/undraw_lost_online.svg';

export default function Skills() {
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
                                        <div className='skills__area-title'>Frontend</div>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS / SASS</li>
                                            <li>Bootstrap</li>
                                            <li>Javascript</li>
                                            <li>jQuery</li>
                                            <li>React **</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6'>
                                    <div className='skills__content-col__content__FEBE-row__BE'>
                                        <div className='skills__area-title'>Backend</div>
                                        <ul>
                                            <li>PHP</li>
                                            <li>Java / Kotlin / Apex</li>
                                            <li>SQL</li>
                                            <li>Lando (Docker)</li>
                                            <li>Laravel</li>
                                            <li>Drupal 8 & 9</li>
                                            <li>WordPress</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='row skills__content-col__content__other-row'>
                                <div className='col-12'>
                                    <div className='skills__area-title'>Other</div>
                                    <ul>
                                        <li>Salesforce</li>
                                    </ul>
                                    <p className='skills__disclaimer'>** some experience and/or knowledge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 skills__image-col'>
                        <div className='skills__image-col__image-container'>
                            <img src={LostInSpaceImg} alt="Man next to horizontal progress bars" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
