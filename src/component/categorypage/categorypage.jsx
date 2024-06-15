import React from 'react'
import './categorypage.css'
import filter from '../../assest/filter.png'
import { FaAngleDown } from "react-icons/fa6";
import slide1 from '../../assest/slide1.png'
import { FaRegHeart } from "react-icons/fa";

const CategoryPage = () => {
    return (
        <>
            <section className='pb-5'>
                <div className="container-fluid container_fluid_px">
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="col-2">
                                <div className="difarent_categories_main_menu border border-2  p-3 rounded-2">
                                    <div className="difarent_categories_heading d-flex align-items-center justify-content-between border-bottom border-3 pb-2 mb-2">
                                        <h5 className='mb-0 fw-bold'>Filters</h5>
                                        <div className="clear_filter">
                                            <span className='pe-3'>Clear All</span>
                                            <a href="javascript:void(0);"><img src={filter} alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="filter_chaek_box">
                                        <h6 className='mb-3'>Price</h6>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="price1" />
                                            <label htmlFor="" for="price1">Under ₹5,000 (7)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="price2" />
                                            <label htmlFor="" for="price2">₹5,001  - ₹10,000 (238)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="price3" />
                                            <label htmlFor="" for="price3">₹10,001  - ₹15,000 (250)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="price4" />
                                            <label htmlFor="" for="price4">₹15,001  - ₹20,000 (177)</label>
                                        </div>
                                        <div className="categories_viewmore mt-3">
                                            <a href="javascript;void(0);" className='d-flex justify-content-between border-bottom border-3 pb-1 mb-3'>
                                                <span>View More (05)</span>
                                                <FaAngleDown className='down_icon' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="filter_chaek_box">
                                        <h6 className='mb-3'>Product Type</h6>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Product1" />
                                            <label htmlFor="" for="Product1">Earrings (208)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Product2" />
                                            <label htmlFor="" for="Product2">Rings (98)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Product3" />
                                            <label htmlFor="" for="Product3">Necklaces (4)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Product4" />
                                            <label htmlFor="" for="Product4">Pendants (78)</label>
                                        </div>
                                        <div className="categories_viewmore mt-3">
                                            <a href="javascript;void(0);" className='d-flex justify-content-between border-bottom border-3 pb-1 mb-3'>
                                                <span>View More (26)</span>
                                                <FaAngleDown className='down_icon' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="filter_chaek_box">
                                        <h6 className='mb-3'>Ring Size</h6>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Ring1" />
                                            <label htmlFor="" for="Ring1">5 (208)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Ring2" />
                                            <label htmlFor="" for="Ring2">6 (98)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Ring3" />
                                            <label htmlFor="" for="Ring3">7 (4)</label>
                                        </div>
                                        <div className="chaek_sub_box d-flex align-items-center mb-2">
                                            <input type="checkbox" className='me-2' id="Ring4" />
                                            <label htmlFor="" for="Ring4">8 (78)</label>
                                        </div>
                                        <div className="categories_viewmore mt-3">
                                            <a href="javascript;void(0);" className='d-flex justify-content-between border-bottom border-3 pb-1 '>
                                                <span>View More (16)</span>
                                                <FaAngleDown className='down_icon' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="difarent_categories_box px-4 d-flex flex-wrap align-items-center">
                                    <div className="col-3">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <a>
                                                        <FaRegHeart />
                                                    </a>
                                                    
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6  mt-4">
                                        <div className="mx-2 difarent_minbox_size"></div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6  mt-4">
                                        <div className="mx-2 difarent_minbox_size"></div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3 mt-4">
                                        <div className="difarent_sub_box border p-2 mx-2">
                                            <div className="difarent_sub_image position-relative">
                                                <img src={slide1} alt="" className='img-fluid' />
                                                <div className="difarent_watchlist d-flex justify-content-between position-absolute">
                                                    <h6 className='mb-0'>Just arrived</h6>
                                                    <FaRegHeart />
                                                </div>
                                            </div>
                                            <div className="difarent_sub_content text-center">
                                                <h6>Sleek Sparkling Diamond Silver Ring</h6>
                                                <span>SKU : CDL-LR2072</span>
                                                <p>Weight : 0.50 ct, 1.00 g</p>
                                                <div className="reveal_button position-relative">
                                                    <h4 className='mb-0'>$4,500</h4>
                                                    <p className='fw-bold position-relative mb-0'>Tap to Reveal</p>
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
        </>
    )
}

export default CategoryPage
