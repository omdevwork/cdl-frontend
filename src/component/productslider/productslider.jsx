import React from 'react';
// import './categories.css'
import Slider from 'react-slick';
import './productslider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import category1 from '../../assest/slide1.png';
import category2 from '../../assest/slide1.png';
import category3 from '../../assest/slide1.png';
import category4 from '../../assest/slide1.png';
import category5 from '../../assest/slide1.png';
import category6 from '../../assest/slide1.png';
import category7 from '../../assest/slide1.png';

// Define NextArrow component
const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            Next
        </div>
    );
};

// Define PrevArrow component
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            Prev
        </div>
    );
};

// const categories = [
//     { id: 1, name: 'RINGS'},
//     { id: 2, name: 'EARRINGS' },
//     { id: 3, name: 'NECKLACE SET' },
//     { id: 4, name: 'BRACELET' },
//     { id: 5, name: 'BANGLES' },
//     { id: 6, name: 'NOSEPINS' },
// ];

const products = [
    { id: 1, name: 'DROPES', img: category1 },
    { id: 2, name: 'DROPES', img: category2 },
    { id: 3, name: 'DROPES', img: category3 },
    { id: 4, name: 'DROPES', img: category4 },
    { id: 5, name: 'DROPES', img: category5 },
    { id: 6, name: 'DROPES', img: category6 },
    { id: 7, name: 'DROPES', img: category7 },
];

const ProductpageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='py-5 categories productslider'>
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h4 className='font-semibold categoriestitle mb-0 title'>SHOP BY STYLE  </h4>
                </div>
                {/* <div className="mb-1">
                    <nav className="bg-white">
                        <ul className="categoriesmenu navbar-nav flex-row d-flex justify-content-start justify-content-lg-center ">
                            {categories.map((category) => (
                                <li className="py-1 px-4 flex-shrink-0" key={category.id}>
                                    <a href="#" className="nav-link d-flex justify-start lg:justify-center items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div> */}
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className='p-2'>
                            <div className="bg-white productslider p-3 rounded-lg text-center">
                                <div className="product_image">

                                <img src={product.img} alt={product.name} className='w-full object-cover mb-0' />
                                <h5 className='text-lg font-medium'>{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ProductpageSlider;