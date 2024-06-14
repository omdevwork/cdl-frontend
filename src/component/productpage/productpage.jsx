// import React, { useState } from 'react';
// import './productpage.css'; // Create this file for custom styles
// import slide1 from '../../assest/slide1.png'
// import slide2 from '../../assest/slide2.png'
// import slide3 from '../../assest/slide3.png'
// import slide4 from '../../assest/slide4.png'
// import slide5 from '../../assest/slide5.png'
// import slide6 from '../../assest/slide6.png'
// import slide7 from '../../assest/slide7.png'

// const images = [
//   { id: 1, src: slide1, alt: 'Image 1' },
//   { id: 2, src: slide2, alt: 'Image 2' },
//   { id: 3, src: slide3, alt: 'Image 3' },
//   { id: 4, src: slide4, alt: 'Image 4' },
//   { id: 5, src: slide5, alt: 'Image 5' },
//   { id: 6, src: slide6, alt: 'Image 6' },
//   { id: 7, src: slide7, alt: 'Image 7' },
// ];

// const ProductSlider = () => {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-6 text-center">
//             <div className="p-5">
//                 <div className="main-image mb-3">
//                     <img src={mainImage.src} alt={mainImage.alt} className="img-fluid" />
//                 </div>
//                 <div className="thumbnail-images d-flex justify-content-center">
//                     {images.map(image => (
//                     <div
//                         key={image.id}
//                         className="thumbnail mx-2"
//                         onMouseEnter={() => setMainImage(image)}
//                     >
//                         <img src={image.src} alt={image.alt} className="img-fluid" />
//                     </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSlider;
import React, { useState } from 'react';
import './productpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import slide1 from '../../assest/slide1.png'
import slide2 from '../../assest/slide2.png'
import slide3 from '../../assest/slide3.png'
import slide4 from '../../assest/slide4.png'
import slide5 from '../../assest/slide5.png'
import slide6 from '../../assest/slide6.png'
import slide7 from '../../assest/slide7.png'

// rightside
import dowload from '../../assest/download.png'
import send from '../../assest/send.png'
import heart from '../../assest/heart.png'
import product_img1 from '../../assest/stone-1.svg'
import product_img2 from '../../assest/stone-2.svg'
import product_img3 from '../../assest/stone-3.svg'
import product_img4 from '../../assest/stone-4.svg'
import product_img5 from '../../assest/stone-5.svg'
import product_img6 from '../../assest/stone-6.svg'
import color1 from '../../assest/color_gold.svg'
import color2 from '../../assest/color_selvar.svg'
import color3 from '../../assest/color_marun.svg'
import shoping from '../../assest/shopping-bag 1.png'
import call_video from '../../assest/video_call.gif'


const images = [
    { id: 1, src: slide1, alt: 'Image 1' },
    { id: 2, src: slide2, alt: 'Image 2' },
    { id: 3, src: slide3, alt: 'Image 3' },
    { id: 4, src: slide4, alt: 'Image 4' },
    { id: 5, src: slide5, alt: 'Image 5' },
    { id: 6, src: slide6, alt: 'Image 6' },
    { id: 7, src: slide7, alt: 'Image 7' },
];

const ProductSlider = () => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailCount = 6; // Number of thumbnails to display at a time

    const handleNext = () => {
        if (currentIndex < images.length - thumbnailCount) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className='productpage'>

            <div className="container my-0">
                <div className="row">
                    <div className="col-md-5 text-center">
                        <div className="">
                            <div className="main-image mb-3 p-0 p-lg-5">
                                <img src={mainImage.src} alt={mainImage.alt} className="img-fluid" />
                            </div>
                            <div className="thumbnail-wrapper d-flex justify-content-center align-items-center">
                                <button
                                    className="btn btn-link"
                                    onClick={handlePrev}
                                    disabled={currentIndex === 0}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <div className="thumbnail-images d-flex">
                                    {images.slice(currentIndex, currentIndex + thumbnailCount).map(image => (
                                        <div
                                            key={image.id}
                                            className="thumbnail mx-2"
                                            onMouseEnter={() => setMainImage(image)}
                                        >
                                            <img src={image.src} alt={image.alt} className="img-fluid" />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-link"
                                    onClick={handleNext}
                                    disabled={currentIndex >= images.length - thumbnailCount}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* rightproduct */}
                    <div className="col-7 rightproduct">
                        <div className="product_main_menu">
                            <div className="product_heading_main_menu d-flex mb-2   ">
                                <div className="product_heading_menu col-8">
                                    <h4>Petals of Elegance Diamond Necklace</h4>
                                    <p>Set in 14 KT Yellow Gold(3.800 g) with diamonds (0.111 ct ,IJ-SI)</p>
                                </div>
                                <div className="product_dowload_menu col-4 d-flex justify-content-center">
                                    <div className="product_min_image me-3">
                                        <a href="javascript:void(0);" className=''><img src={dowload} alt="" /></a>
                                    </div>
                                    <div className="product_min_image me-3">
                                        <a href="javascript:void(0);" className=''><img src={send} alt="" /></a>
                                    </div>
                                    <div className="product_min_image me-3">
                                        <a href="javascript:void(0);" className=''><img src={heart} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <h6 className='mb-3'>Stone Type</h6>
                                <div className="selact__main_button d-flex flex-wrap">
                                    <div className="selact_sub-button me-4">
                                        <a href="javascript;void(0);" className='text-white active rounded-1' >Lab Diamond</a>
                                    </div>
                                    <div className="selact_sub-button me-4">
                                        <a href="javascript;void(0);" className='bg-white rounded-1' >Natural Diamonds</a>
                                    </div>
                                    <div className="selact_sub-button me-4">
                                        <a href="javascript;void(0);" className='bg-white rounded-1' >Moissanite</a>
                                    </div>
                                    <div className="selact_sub-button me-4">
                                        <a href="javascript;void(0);" className='bg-white rounded-1' >CZ</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <h6 className='mb-1'>Primary Stone Shape -<span className='fw-normal'>Oval</span></h6>
                                <div className="new_product_menu d-flex align-items-center">
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img1} alt="" /></a>
                                    </div>
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img6} alt="" /></a>
                                    </div>
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img5} alt="" /></a>
                                    </div>
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img4} alt="" className='border_img rounded-5 p-1' /></a>
                                    </div>
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img3} alt="" /></a>
                                    </div>
                                    <div className="product_sub_menu me-4">
                                        <a href="javascript:void(0);"><img src={product_img2} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-wrap">
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Primary Stone Size</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>1.00ct</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Diamond Clarity</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>VVS</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Diamond Color</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>DEF</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Metal</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>Gold</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Color</label>
                                        <br />
                                        <div className="d-flex align-items-center flex-wrap">
                                            <a href="javascript:void(0);"><img src={color1} alt="" className='me-2' /></a>
                                            <a href="javascript:void(0);"><img src={color2} alt="" className='me-2' /></a>
                                            <a href="javascript:void(0);"><img src={color3} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Select Size </label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>2</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Quantity</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>2</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4" >
                                    <div className="product_box pb-2 ps-0 pe-4">
                                        <label htmlFor="" className='mb-2'>Turn Around Time</label>
                                        <br />
                                        <select class="form-select rounded-1" aria-label="Default select example">
                                            <option selected>0-25 Grams 08 Days</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-12 d-flex justify-content-between align-items-center mt-2">
                                <div className="col-4 text-center position-relative ">
                                    <a href="javascript:void(0);" className='price_reveal mb-3'>
                                        <h2>$4,500</h2>
                                        <p className='position-absolute m-0 fw-bold'>Tap To Reveal</p>
                                    </a>
                                    <div className="add_cart_button d-flex justify-content-center mt-4">
                                        <a href="javascript:void(0);" className='d-flex col-10 justify-content-center text-white rounded-1'>Add to cart <img src={shoping} alt="" className='ps-2' /></a>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="video_sub_box d-flex text-center align-items-center">
                                        <div className="video_image ">
                                            <img src={call_video} alt="" />
                                        </div>
                                        <div className="video_content py-3">
                                            <h5>Live Video Call</h5>
                                            <p className='mb-4'>Join a live video call with our consultants to see
                                                your favourite designs up close!</p>
                                            <div className="video_button px-2">
                                                <a href="javascript:void(0);" className='text-white rounded-1 w-100 d-block'>Schedule Video Call</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-12 d-flex justify-content-between align-items-center mt-0">
                                        <div className="col-4  position-relative ">
                                            <a href="javascript:void(0);" className='price_reveal mb-3'>
                                                <h2 className='mb-0'>$4,500</h2>
                                                <p className='position-relative m-0 fw-bold col-12'>Tap To Reveal</p>
                                            </a>
                                            <div className="add_cart_button d-flex justify-content-start">
                                                <a href="javascript:void(0);" className='d-flex col-11 justify-content-center text-white rounded-1'>Add to cart <img src={shoping} alt="" className='ps-2' /></a>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="video_sub_box d-flex text-center align-items-center">
                                                <div className="video_image ">
                                                    <img src={call_video} alt="" />
                                                </div>
                                                <div className="video_content">
                                                    <h5>Live Video Call</h5>
                                                    <p className='mb-4'>Join a live video call with our consultants to see
                                                        your favourite designs up close!</p>
                                                    <div className="video_button px-1">
                                                        <a href="javascript:void(0);" className='text-white rounded-1 w-100 d-block'>Schedule Video Call</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
