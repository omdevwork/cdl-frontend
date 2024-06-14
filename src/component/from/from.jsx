import React from 'react'
import './from.css'
import google from '../../assest/from_sign2.png'
import facebook from '../../assest/from_sign.png'
import join_img1 from '../../assest/join_img1.png'
import join_img2 from '../../assest/join_img2.png'
import join_img3 from '../../assest/join_img3.png'
import join_img4 from '../../assest/join_img4.png'
import join_img5 from '../../assest/join_img5.png'
import join_img6 from '../../assest/join_img6.png'

const CdlForm = () => {
    return (
        <>
            <section className='from_section py-50'>
                <div className="container-fluid from_container_p">
                    <div className="row">
                        <div className="section_taital text-center mb-5">
                            <h4>Have you unlocked the full experience yet?</h4>
                        </div>
                        <div className="col-12 d-flex flex-wrap">
                            <div className="from_main_sub col-12 col-lg-6 mb-5 mb-lg-0">
                                <div className="from_sub_box  d-flex flex-wrap justify-content-center p-4 bg-white m-2">
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>FIRST NAME</label>
                                            <br />
                                            <input type="text"className='border-0' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>LAST NAME</label>
                                            <br />
                                            <input type="text" className='border-0'/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>PHONE NUMBER</label>
                                            <br />
                                            <input type="text" className='border-0'/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>EMAIL</label>
                                            <br />
                                            <input type="text" className='border-0'/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>PASSWORD</label>
                                            <br />
                                            <input type="text"className='border-0' />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="from_input_sub mb-3">
                                            <label htmlFor="" className='mb-2'>CONFIRM PASSWORD</label>
                                            <br />
                                            <input type="text" className='border-0'/>
                                        </div>
                                    </div>
                                    <div className="from_login text-center">
                                        <h6 className='mb-3'>Login With</h6>
                                        <div className="from_sign_menu d-flex">
                                            <span className='border border-dark p-2 rounded-5 me-4'><img src={google} alt="" /></span>
                                            <span className='border border-dark p-2 rounded-5'><img src={facebook} alt="" /></span>
                                        </div>
                                        <div className="from_button mt-4">
                                            <a href="javascript:void(0);" className='border border-2 border-dark rounded-2 fw-semibold'>NEXT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="join_us_menu m-2">
                                    <div className="col-12 mb-4">
                                        <div className="join_heading bg-white py-3 px-2 text-center">
                                            <h5>Why Join Us ?</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex flex-wrap">
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub mb-3 pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img1} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Access To Exclusive Price</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub  mb-3 pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img2} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Order Tracking And Management</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub mb-3 pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img3} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Custom Design Submission</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub mb-3  pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img4} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Priority Customer Support</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub mb-3 mb-md-0 pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img5} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Quality Assurance And Report</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="join_us_sub  pe-3">
                                                <div className="join_us_sub_box d-flex align-items-center bg-white">
                                                    <div className="join_image pe-3">
                                                        <img src={join_img6} alt="" />
                                                    </div>
                                                    <div className="join_content">
                                                        <h6>Product Detail In Pdf</h6>
                                                    </div>
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

export default CdlForm
