import React from 'react';

export default class AboutOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-one__img-box">
                                        <div className="about-one__img">
                                            <img src={publicUrl+"assets/images/manukula/image-1.jpeg"} style={{height:'400px'}} alt="" />
                                        </div>
                                        <div className="about-one__small-img wow zoomIn animated animated" data-wow-delay="500ms"
                                            data-wow-duration="2500ms">
                                            <img src={publicUrl+"assets/images/manukula/image-2.jpeg"} style={{width:'400px', height:'200px'}} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                        <div className="section-title text-left">
                                            <span className="section-title__tagline">About Us</span>
                                            <h2 className="section-title__title">Manukula Charitable & Educational Trust Mission</h2>
                                        </div>
                                        <p className="about-one__text">To effect positive change in the future by empowering visually impaired girls and women of today to grow into self-sufficient independents of tomorrow who may one day change the future for their community, country and/or possibly the world.</p>
                                        <ul className="list-unstyled about-one__points">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Mission:</h4>
                                                    <p>To enable visually impaired individuals to overcome the barriers that impede their independence and participation in society.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Vision</h4>
                                                    <p>To empower individuals living with low vision or blindness to discover, develop and achieve their full potenDal.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-one__bottom-video-box">
                                            <div className="about-one__btn-box">
                                                <a href="about.html" className="thm-btn about-one__btn">About More</a>
                                            </div>
                                            <div className="about-one__video-link">
                                                <a href={publicUrl+"assets/videos/gnanakshi.mp4"} 
                                                className="video-popup">
                                                    <div className="about-one__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}