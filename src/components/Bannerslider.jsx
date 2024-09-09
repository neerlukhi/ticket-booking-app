import React from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../movie.css';

const Bannerslider = () => {

    var settings = {
        className: "center",
        dots: true,
        centerMode: true,
        arrows: false,
        infinite: true,
        // centerPadding : '150px',
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                <div className='item overflow-hidden'>
                    <img src={require('../book my show/slider-1.jpg')} className='slide-img' alt="" />
                </div>
                <div className='item'>
                    <img src={require('../book my show/slider-2.jpg')} className='slide-img' alt="" />
                </div>
                <div className='item'>
                    <img src={require('../book my show/slider-3.jpg')} className='slide-img' alt="" />
                </div>
                <div className='item'>
                    <img src={require('../book my show/slider-4.jpg')} className='slide-img' alt="" />
                </div>
            </Slider>
        </>
    )
}

export default Bannerslider