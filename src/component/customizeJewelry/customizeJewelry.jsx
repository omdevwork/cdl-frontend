import React from 'react'
import category from '../../assest/category.png'
import './customizeJewelry.css'
const CustomizeJewelry = () => {
    return (
        <div className='mb-5 CustomizeJewelry'>
            <h3 className='text-center mb-3 title pt-3'>Customize Jewelry Request(FREE)</h3>
            <div className="px-3 px-lg-5 pb-3 pb-lg-5 pt-3 CustomizeJewelryBox  d-flex flex-wrap ">
                <div className="col-12 col-lg-6">
                    <form action="">
                        <div className="">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">WHAT TYPE OF CUSTOM PIECE ARE YOU INTRESTED IN ?</label>
                                <input type="text" className="form-control" id="firstName" placeholder=" " />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">METAL</label>
                                <select class="form-select form-select-md mb-0" aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">METAL COLOR</label>
                                <select class="form-select form-select-md mb-0" aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">STONE</label>
                                <select class="form-select form-select-md mb-0" aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">STONE CLARITY</label>
                                <select class="form-select form-select-md mb-0" aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">STONE COLOR</label>
                                <select class="form-select form-select-md mb-0" aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-5 mb-3 customewidth">
                                <label htmlFor="firstName" className="form-label">SIZE</label>
                                <select class="form-select form-select-md mb-0 " aria-label=".form-select-md example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">UPLOAD PHOTOS/VIDEO</label>
                                <input type="text" className="form-control" id="firstName" placeholder=" " />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">ENGRAVING</label>
                                <textarea type="text" className="form-control" id="firstName" placeholder=" " />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-lg mx-auto d-flex">SUBMIT</button>
                    </form>
                </div>
                <div className="col-12 col-lg-6 cutomformright  mt-5 mt-lg-0">
                    <img src={category} alt="" className='img-fluid' />
                    <div className="row flex-wrap mt-5 mt-lg-3">
                        {/* Box 1 */}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-2 px-0 d-flex align-items-center justify-content-center border  border-light rounded-md">
                            <div className="Customjewlrysub CustomJewelrybox me-2">
                                <div className="CustomJewelryDis d-flex align-items-center text-dark">
                                    <h4>99</h4>
                                    <div>
                                        <span>%</span>
                                        <p> uniqueness, 100% your style.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-2 px-0 d-flex align-items-center  border border-light rounded-md">
                            <div className="Customjewlrysub CustomJewelrybox me-2">
                                <div className="CustomJewelryDis  d-flex align-items-center text-dark">
                                    <h4>99</h4>
                                    <div>
                                        <span>%</span>
                                        <p className='mb-0'> satisfaction guaranteed with
                                            custom designs.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0 px-0 d-flex align-items-center  border border-light rounded-md">
                            <div className="Customjewlrysub CustomJewelrybox me-2">
                                <div className="CustomJewelryDis  d-flex align-items-center text-dark">
                                    <h4>85</h4>
                                    <div>
                                        <span>%</span>
                                        <p className='mb-0'> happier customers with
                                            personalized jewelry.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Box 4 */}
                        <div className="col-12 col-lg-6 px-0 d-flex align-items-center  border border-light rounded-md">
                            <div className="Customjewlrysub CustomJewelrybox me-2">
                                <div className="CustomJewelryDis  d-flex align-items-center text-dark">
                                    <h4>99</h4>
                                    <div>
                                        <span>%</span>
                                        <p className='mb-0'> more meaningful gifts with
                                            customization.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeJewelry
