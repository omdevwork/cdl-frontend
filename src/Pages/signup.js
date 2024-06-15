import React from 'react'
import google from '../../src/assest/google.png'
import facebook from '../../src/assest/facebook.png'
const Signup = () => {
    return (
        <div className='signuppage'>
            <h3 className='text-center'>Sign Up</h3>
            <form action="" className='col-md-6 mx-auto'>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter Your First Name " />
                    </div>
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder=" Enter Your Last Name" />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phone" placeholder=" 8200-845977" />
                    </div>
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder=" parthvaghani210@gmail.com" />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">Password</label>
                        <input type="number" className="form-control" id="password" placeholder=" ********" />
                    </div>
                    <div className="col-12 col-lg-5 mb-3 customewidth">
                        <label htmlFor="firstName" className="form-label">Confirm Password</label>
                        <input type="email" className="form-control" id="confirmpassword" placeholder="******** " />
                    </div>
                </div>
                <p className='text-center'>Login With</p>
                <div className="d-flex flex-wrap justify-content-center">
                    <button type="submit" class="btn loginwithother btn-lg d-flex align-items-center">
                        <img src={google} alt='facebook' className='me-2' />
                        Google
                    </button>

                    <button type="submit" class="btn loginwithother ms-3 btn-lg d-flex align-items-center">
                        <img src={facebook} alt='facebook' className='me-2' />
                        Facebook
                    </button>
                </div>
                <button type="submit" class="btn loginnext mx-auto mt-4 btn-lg d-flex align-items-center"> 
                        NEXT
                </button>
                <span className='text-center d-flex align-items-center justify-content-center mt-3'>Already have an account? <a href=''>Login</a></span>
            </form>
        </div>
    )
}

export default Signup
