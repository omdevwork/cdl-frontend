import React from 'react'
import './instagram.css'
import insta1 from '../../assest/instagram1.png'
import insta2 from '../../assest/instagram2.png'
import insta3 from '../../assest/instagram3.png'
import insta4 from '../../assest/instagram4.png'
import insta5 from '../../assest/instagram5.png'

const Instagram = () => {
    return (
        <>
            <section className='instagram pb-100 pb-50'>
                <div className="container">
                    <div className="row">
                        <div className="section_taital text-center mb-3">
                            <h4 className='title'>Follow us instagram</h4>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta1} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta2} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta3} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta4} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta5} alt="" className='img-fluid'/>
                                </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center justify-content-start">
                                <div className="instagram_sub_box p-2">
                                    <img src={insta5} alt="" className='img-fluid'/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Instagram
