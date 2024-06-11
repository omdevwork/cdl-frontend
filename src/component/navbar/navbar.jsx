import React from 'react'
import './navbar.css'
import videoicon from '../../assest/videoicon.png'
const Navbar = () => {
    return (
        <div className='position-relative'>
            <div className='topHeader'>
                <div className="container">
                    {/* <div className="row">
                        <div className="d-flex align-items-center">

                            <h4 className='text-white mb-0 p-3'>999.9 Gold Selling Price HK$ 25,680 / tael</h4>
                            <div className="onlinecall ms-auto">
                                <img src={videoicon} alt="" />
                                <button className='Virtual'>Virtual factory visit</button>
                            </div>
                        </div>
                    </div> */}
                    <div className="row knowledgetitle justify-content-center align-items-center">
                        <div className="col-12 position-relative d-flex justify-content-center align-items-center">
                        <h4 className='text-white mb-0 p-3'>999.9 Gold Selling Price HK$ 25,680 / tael</h4>

                            <div className="pagination-container testimonial-right d-flex flex-wrap position-absolute end-0">
                                <div className="onlinecall ms-auto">
                                    <img src={videoicon} alt="" />
                                    <button className='Virtual'>Virtual factory visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
