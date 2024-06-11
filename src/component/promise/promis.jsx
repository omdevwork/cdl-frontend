import React from 'react'
import './promis.css'
import promis1 from '../../assest/promis1.png'
import promis2 from '../../assest/promis2.png'
import promis3 from '../../assest/promis3.png'
import promis4 from '../../assest/promis4.png'

const Promis = () => {
    return (
        <>
            <section className='promis py-5'>
                <div className="container">
                    <div className="row">
                        <div className="section_taital text-center mb-3">
                            <h4 className='title'>CDL Promise </h4>
                        </div>
                        <div className="col-12 d-flex flex-wrap">
                            <div className=" col-12 col-xl-4 d-flex justify-content-center">
                                <div className="promis_sub_sec text-center text-xl-start ">
                                <img src={promis1} alt="" className='img-fluid' />
                                    <h2 className='mt-3'>OAR Huggie Earings</h2>
                                </div>
                            </div>
                            <div className=" col-12 col-xl-8">
                                <div className="promis_cdl_sub">
                                    <div className="col-12">
                                        <div className="promis_sub_details mx-2">
                                            <h2>CDL Promise</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                                            <div className="promis_button mb-5">
                                                <a href="javascript;void(0);" className='nav-link'>LEARN MORE</a>
                                            </div>
                                            <h6>WJA 2023 Gabriel Love Foundation® Student Scholarship</h6>
                                            <span className='fw-bold text-capitalize"'>“Thank you for believing in my dream and for giving me the opportunity to turn it into a reality.”</span>
                                            <p>Oksana Membreno — 2022 Scholarship recipient</p>
                                            <div className="promis_button">
                                                <a href="javascript;void(0);" className='nav-link'>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="promis_main col-12 d-flex flex-wrap justify-content-center">
                                        <div className="co-12 col-md-4 ">
                                            <div className="promis_sub_sec p-2 pe-0 text-center text-md-start">
                                                <img src={promis2} alt="" className='col-12' />
                                                <h2 className='mt-3'>Make-a-wish</h2>
                                            </div>
                                        </div>
                                        <div className="co-12 col-md-4">
                                            <div className="promis_sub_sec p-2 pe-1 ps-1 text-center text-md-start">
                                                <img src={promis3} alt="" className='col-12' />
                                                <h2 className='mt-3'>91-19</h2>
                                            </div>
                                        </div>
                                        <div className="co-12 col-md-4">
                                            <div className="promis_sub_sec p-2 ps-0 text-center text-md-start">
                                                <img src={promis4} alt="" className='col-12' />
                                                <h2 className='mt-3'>Stronger Together</h2>
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

export default Promis
