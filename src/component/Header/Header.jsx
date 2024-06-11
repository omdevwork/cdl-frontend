import React from 'react'
import './Header.css'
import logo from '../../assest/header-logo.png'
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import cuntry from '../../assest/cuntry-image.png'
import cart from '../../assest/market 1.png'
import heart from '../../assest/e-commerce 1.png'
import austelia from '../../assest/AUSTELIA.png'
import uk from '../../assest/uk flag.png'

const Header = () => {
    return (
        <>
            {/* <section className=' header nav_top py-2  text-center'>
                <div className="container">
                    <div className="row">
                        <p className='m-0 text-white'>999.9 GOLD SELLING PRICE HK$ 25,680 / TAEL</p>
                    </div>
                </div>
            </section> */}
          <header className='d-none d-lg-block'>
                <div className="container">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg p-2 p-xl-0 ">
                            <div class="container-fluid">
                                <a class="navbar-brand col-1" href="#"><img src={logo} alt="" /></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                                    <div className="header_box d-flex col-12 col-lg-5 justify-content-center justify-content-lg-between">
                                        <ul class="navbar-nav  mb-2 mb-lg-0 text-center text-lg-satrt mb-4 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link active text-dark  p-2" aria-current="page" href="#">PRODUCTS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark p-2" href="#">WORLD OF CDL</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark p-2" aria-disabled="true">GIFTS</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark p-2" aria-disabled="true">GALLERY</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-dark p-2" aria-disabled="true">CONTACT US</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header_box_menu col-12 col-lg-7 d-md-flex justify-content-between">
                                        <form class="d-flex position-relative justify-content-center justify-content-lg-start mb-4 mb-md-0" role="search">
                                            <input className="from_input me-2 rounded-0 bg-transparent fw-normal p-2" type="search" placeholder="SEARCH BY DIAMOND NECKLACE " aria-label="Search" />
                                            <button className=" d-flex align-items-center justify-content-center rounded-0 position-absolute border-0" type="submit"><FaSearch className='search text-white' /></button>
                                        </form>
                                        <div className="cuntry_menu d-flex justify-content-center justify-content-md-end mb-4 mb-md-0 col-2">
                                            <div className="cuntry_main_menu d-flex col-5 ">
                                                <div className="dropdown d-flex justify-content-center justify-content-lg-start">
                                                    <button className="cuntry_img  d-flex align-items-center pe-2 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src={cuntry} alt="" className='col-6' />
                                                        <FaAngleDown className='text-black col-7 ps-2' />
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={austelia} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={uk} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="cuntry_main_menu d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <div className="dropdown border-start border-dark ps-2">
                                                    <button className=" d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <h6 className='m-0 text-dark fw-normal pe-2'>EN</h6>
                                                        <FaAngleDown className='text-black' />
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">German</a></li>
                                                        <li><a className="dropdown-item" href="#">China</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login_act  text-center  d-flex align-items-center justify-content-center justify-content-start">
                                            <div class="dropdown">
                                                <button class="account_sign" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Hello,Sign in <br /> <span className='text_bold text-base fw-bold flex items-center'>Account<FaAngleDown className='ps-1' /></span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                                </ul>
                                            </div>
                                            <div className="admin_using d-flex ps-2 ps-xl-3 justify-content-center justify-content-lg-start">
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={cart} alt="" className='pe-2 pe-xxl-3 ' /></a>
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={heart} alt="" className='pe-2 pe-xxl-3 ' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
