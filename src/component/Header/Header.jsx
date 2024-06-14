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
import user from '../../assest/user 1.png'
import cuntry1 from '../../assest/cuntry1.svg'
import cuntry2 from '../../assest/cuntry2.svg'
import cuntry3 from '../../assest/cuntry3.svg'
import cuntry4 from '../../assest/cuntry4.svg'

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
            {/* largedekstop-dekstop-laptop  */}
            <header className='d-none d-lg-block'>
                <div className="container-fluid">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg p-2 p-xl-0 ">
                            <div class="container-fluid">
                                <a class="navbar-brand col-1 me-0" href="#"><img src={logo} alt="" /></a>
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
                                    <div className="header_box_menu col-12 col-lg-7 d-md-flex justify-content-between justify-content-xl-evenly align-items-center">
                                        <form class="d-flex position-relative justify-content-center justify-content-lg-start mb-4 mb-md-0" role="search">
                                            <input className="from_input ms-lg-4 ms-xl-5 rounded-0 bg-transparent fw-normal p-2" type="search" placeholder="SEARCH BY DIAMOND NECKLACE " aria-label="Search" />
                                            <button className=" d-flex align-items-center justify-content-center rounded-0 position-absolute border-0" type="submit"><FaSearch className='search text-white' /></button>
                                        </form>
                                        <div className="cuntry_menu d-flex justify-content-center  mb-4 mb-md-0 col-3 col-xl-2">
                                            <div className="cuntry_main_menu d-flex col-5 ">
                                                <div className="dropdown d-flex justify-content-center justify-content-lg-start">
                                                    <button className="cuntry_img  d-flex align-items-center  pe-3 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src={cuntry} alt="" className='col-6 col-xl-7' />
                                                        <FaAngleDown className='text-black  col-7 ps-2' />
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={austelia} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={uk} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="cuntry_main_menu d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <div className="dropdown border-start border-dark ps-1 ps-xl-2">
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
                                                <button class="account_sign text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Hello,Sign in <br /> <span className='text_bold text-base fw-bold flex items-center'>Account<FaAngleDown className='ps-1' /></span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                                </ul>
                                            </div>
                                            <div className="admin_using d-flex ps-2 ps-xl-3 justify-content-center justify-content-lg-start">
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={cart} alt="" className='pe-2 pe-xxl-3 ' /></a>
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={heart} alt="" className='pe-2 pe-xxl-2 ' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* tablet */}
            <header className='d-lg-none d-md-block d-none'>
                <div className="container-fluid">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg p-2 p-xl-0 ">
                            <div class="container-fluid px-0  justify-content-md-between">
                            <button class="navbar-toggler border-0 px-0 px-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                                </div>
                                <a class="navbar-brand col-1 me-2" href="#"><img src={logo} alt="" /></a>
                                <div className="header_box_menu  col-9 d-flex justify-content-between justify-content-xl-evenly align-items-center">
                                        <form class="d-flex position-relative justify-content-center justify-content-lg-start" role="search">
                                            <input className="from_input  rounded-0 bg-transparent fw-normal p-2" type="search" placeholder="SEARCH BY DIAMOND NECKLACE " aria-label="Search" />
                                            <button className=" d-flex align-items-center justify-content-center rounded-0 position-absolute border-0" type="submit"><FaSearch className='search text-white' /></button>
                                        </form>
                                        <div className="cuntry_menu d-flex justify-content-center  col-3">
                                            <div className="cuntry_main_menu d-flex col-5 ">
                                                <div className="dropdown d-flex justify-content-center justify-content-lg-start ">
                                                    <button className="cuntry_img  d-flex align-items-center  pe-2 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src={cuntry} alt="" className='col-6' />
                                                        <FaAngleDown className='text-black  col-8' />
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={austelia} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                        <li><a className="dropdown-item ps-0" href="#"><img src={uk} alt="" className='pe-4 col-7 col-xl-4' /></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="cuntry_main_menu d-flex align-items-center justify-content-center justify-content-lg-start">
                                                <div className="dropdown border-start border-dark ">
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
                                        <div className="login_act text-center  d-flex align-items-center justify-content-center justify-content-start">
                                            <div class="dropdown">
                                                <button class="account_sign text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Hello,Sign in <br /> <span className='text_bold text-base fw-bold flex items-center'>Account<FaAngleDown className='ps-1' /></span>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                                </ul>
                                            </div>
                                            <div className="admin_using d-flex ps-2 ps-xl-3 justify-content-center justify-content-lg-start">
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={cart} alt="" className='pe-3 ' /></a>
                                                <a href="javascript:void(0);" className='d-flex align-items-center'><img src={heart} alt="" className='pe-2 pe-xxl-2 ' /></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* mobile */}
            <header className='d-block d-md-none'>
                <div className="container">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg  d-flex">
                            <div class="container-fluid  col-1 m-0 ">
                                <button class="navbar-toggler border-0 p-0 py-sm-1 px-sm-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header ">
                                        <h5 class="offcanvas-title " id="offcanvasExampleLabel"><img src={logo} alt="" className='col-2 col-sm-1' /></h5>
                                        <button type="button" class="btn-close close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <nav>
                                            <ul className='p-0'>
                                                <li className='p-3 border-bottom border-dark'>
                                                    <a href="javascript;void(0);">PRODUCTS</a>
                                                </li>
                                                <li className='p-3 border-bottom border-dark'>
                                                    <a href="javascript;void(0);">WORLD OF CDL</a>
                                                </li>
                                                <li className='p-3 border-bottom border-dark'>
                                                    <a href="javascript;void(0);">GIFTS</a>
                                                </li>
                                                <li className='p-3 border-bottom border-dark'>
                                                    <a href="javascript;void(0);">GALLERY</a>
                                                </li>
                                                <li className='p-3 border-bottom border-dark'>
                                                    <a href="javascript;void(0);">CONTACT US</a>
                                                </li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                            <a class="navbar-brand  col-sm-2 col-md-1 me-0" href="#"><img src={logo} alt="" className='col-9' /></a>
                            <div className="header_box_menu col-6 col-md-9  d-flex justify-content-between">
                                <form class="d-flex position-relative justify-content-center justify-content-lg-start mb-4 mb-md-0" role="search">
                                    <input className="from_input_mobile d-none d-md-block rounded-0 bg-transparent fw-normal py-2 ps-4 pe-2 border-bottom border-dark" type="search" placeholder="SEARCH BY DIAMOND NECKLACE " aria-label="Search" />
                                    <button className=" d-flex align-items-center justify-content-center position-absolute border-0 bg-transparent" type="submit"><FaSearch className='search text-black' /></button>
                                </form>
                                <div className="login_act ps-1 ps-xxl-3 text-center  d-flex align-items-center justify-content-center justify-content-start">
                                    <div className="admin_using d-flex ps-2 ps-xl-3 justify-content-center justify-content-lg-start col-12">
                                        <a href="javascript;void(0);" className='d-flex align-items-center pe-1 pe-sm-3'><img src={user} alt="" className='pe-2 col-10 col-sm-12'/></a>
                                        <a href="javascript:void(0);" className='d-flex align-items-center pe-1 pe-sm-3'><img src={cart} alt="" className='pe-2 pe-xxl-3 col-10  col-sm-12' /></a>
                                        <a href="javascript:void(0);" className='d-flex align-items-center pe-1 pe-sm-3'><img src={heart} alt="" className='pe-2 pe-xxl-3 col-10  col-sm-12' /></a>
                                    </div>
                                </div>
                                <div className="cuntry_menu d-flex justify-content-center justify-content-md-end col-4  col-md-3">
                                    <div className="cuntry_main_menu d-flex col-8  ">
                                        <div className="dropdown d-flex justify-content-center justify-content-lg-start">
                                            <button className="cuntry_img  d-flex align-items-center pe-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                <img src={cuntry} alt="" className='col-8 col-sm-5' />
                                                <FaAngleDown className='text-black col-8 col-sm-7' />
                                            </button>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog mt-5 d-flex align-items-center">
                                                    <div class="modal-content border-0 bg-transparent position-relative">
                                                        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        <div class="modal-body bg-white">
                                                            <div className="col-12 d-flex flex-wrap ">
                                                                <div className="col-4 ">
                                                                    <a href="javascript:void(0);" className='d-flex align-items-center'>
                                                                        <img src={cuntry1} alt="" className='col-2 me-3' />
                                                                        <p className='m-0'>United States</p>
                                                                    </a>
                                                                </div>
                                                                <div className="col-4">
                                                                    <a href="javascript:void(0);" className='d-flex align-items-center'>
                                                                        <img src={cuntry2} alt="" className='col-2 me-3' />
                                                                        <p className='m-0'>Australia</p>
                                                                    </a>
                                                                </div>
                                                                <div className="col-4">
                                                                    <a href="javascript:void(0);" className='d-flex align-items-center'>
                                                                        <img src={cuntry3} alt="" className='col-2 me-3' />
                                                                        <p className='m-0'>Canada</p>
                                                                    </a>
                                                                </div>
                                                                <div className="col-4 mt-3">
                                                                    <a href="javascript:void(0);" className='d-flex align-items-center'>
                                                                        <img src={cuntry4} alt="" className='col-2 me-3' />
                                                                        <p className='m-0'>India</p>
                                                                    </a>
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
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
