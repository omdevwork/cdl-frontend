import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './whycdl.css';
import hoverimage1 from '../../assest/category1.png';
import hoverimage2 from '../../assest/category2.png';
import hoverimage3 from '../../assest/category3.png';
import hoverimage4 from '../../assest/category4.png';

function WhyCDL() {
    const [hoveredImage, setHoveredImage] = useState(0); // Initialize with the first image
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: hoverimage1,
            content: 'We stepped into the business of trading loose diamonds back in 1995 with a clear vision of offering best quality diamonds at fair market price. Since then, we’ve always been committed to providing business transparency and 100% customer satisfaction. With years of experience behind us, our company has successfully carved a niche for itself and also established a potent and outstanding reputation amongst international diamond dealers.Using Internationally Approved (GIA) system to grade diamonds and High End Craftsmanship following by Strict Quality Control(QC) process, CDL FINESHINE’s collection are loved by the big players of the market',
        },
        {
            src: hoverimage2,
            content: 'This is the content for image 2.',
        },
        {
            src: hoverimage3,
            content: 'This is the content for image 3.',
        },
        {
            src: hoverimage4,
            content: 'This is the content for image 4.',
        },
    ];

    const handleImageHover = (index) => {
        setHoveredImage(index);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const visibleImages = images.slice(currentIndex, currentIndex + 3);

    return (
        <section className='whyCDL'>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="image-slider d-flex align-items-center">
                            <button className="btn" onClick={handlePrev}><FaAngleLeft /></button>
                            <div className="slider-images d-flex">
                                {visibleImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.src}
                                        alt={`Image ${currentIndex + index + 1}`}
                                        onMouseEnter={() => handleImageHover(currentIndex + index)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                        className="slider-image img-fluid mx-2"
                                    />
                                ))}
                            </div>
                            <button className="btn" onClick={handleNext}><FaAngleRight /></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-content p-3 border">
                            {hoveredImage !== null && (
                                <div>
                                    <h3>{images[hoveredImage].content}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyCDL;
