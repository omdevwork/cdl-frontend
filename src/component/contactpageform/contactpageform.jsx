import React from 'react'
import callicon from '../../assest/callicon.png'
import mailicon from '../../assest/mailicon.png'
import locationicon from '../../assest/locationicon.png'
import './contactpageform.css'

const Contactpageform = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-6">
                        <h3 className='mb-5'>Get In Touch</h3>
                        <div className="contactinfo d-flex flex-wrap align-items-start">
                            <img src={callicon} alt="" />
                            <div className="div ms-3">
                                <p className='mb-0'>Call US</p>
                                <a href="tel:+918200845977">+91 8200-845977</a>
                            </div>
                        </div>
                        <div className="contactinfo my-4 d-flex flex-wrap align-items-start">
                            <img src={mailicon} alt="" />
                            <div className="div ms-3">
                                <p className='mb-0'>Email</p>
                                <a href="mailto:sales@cdlfineshine.com">sales@cdlfineshine.com</a>
                            </div>
                        </div>
                        <div className="contactinfo d-flex flex-wrap align-items-start">
                            <img src={locationicon} alt="" />
                            <div className="div ms-3">
                                <p className='mb-0'>Head Office</p>
                                <a href="tel:+918200845977">CDL FINESHINE PVT LTD SIXTH FLOOR, 601 LALITA ESTATE, <br /> NANDU DOSHI NI WADI, VASTADEVDI ROAD, KATARGAM-395004 <br />SURAT, GUJARAT, INDIA</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 contactpageform">

                        <form action="">
                            <div className="">
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=" " />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="col-12 col-lg-5 mb-3 customewidth">
                                    <label htmlFor="firstName" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=" " />
                                </div>
                                <div className="col-12 col-lg-5 mb-3 customewidth">
                                    <label htmlFor="firstName" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=" " />
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Massage</label>
                                    <textarea type="text" className="form-control" id="firstName" placeholder=" " />
                                </div>
                            </div>
                            <button type="submit" class="btn mx-auto d-flex contactbtn">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactpageform
