import React from 'react';
import './featuredIN.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../../assest/sponcer1.png';
import logo2 from '../../assest/sponcer2.png';
import logo3 from '../../assest/sponcer3.png';
import logo4 from '../../assest/sponcer4.png';
import logo5 from '../../assest/sponcer5.png';

const FeaturedInSlider = () => {
    const logos = [
        { id: 1, image: logo1 },
        { id: 2, image: logo2 },
        { id: 3, image: logo3 },
        { id: 4, image: logo4 },
        { id: 5, image: logo5 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container-fluid featureslider_p">
            <div className="row align-items-center">
                <div className="featuresliderleft">
                    <h2 className="featuredINtitle text-center text-lg-start">As Featured In</h2>
                </div>
                <div className="featuresliderright featuredINSlider pb-5 pb-lg-0">
                    <Slider {...settings}>
                        {logos.map((logo) => (
                            <div key={logo.id}>
                                <img src={logo.image} alt={`Featured In Logo ${logo.id}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedInSlider;
