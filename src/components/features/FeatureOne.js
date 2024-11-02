import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        return (
            <>
                <section className="feature-one">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-donation-1"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Supportive and Counselled</Link></h3>
                                    </div>
                                    <p className="feature-one__text">Equipping the visually impaired to the level that can be a part of this competition of winning a job and career</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-heart"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Community of The Blinds</Link></h3>
                                    </div>
                                    <p className="feature-one__text">Serving those of any race, creed, caste or religion, Giving unconditional love without reservation.</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-help"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Children of Dreams</Link></h3>
                                    </div>
                                    <p className="feature-one__text">Enabling Livelihood Creation for the hidden visually impaired (VI) women by empowering them with skills and training</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}