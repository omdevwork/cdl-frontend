import React from 'react'
import google from '../../src/assest/google.png'
import facebook from '../../src/assest/facebook.png'
const Login = () => {
    return (
        <div className='signuppage'>
            <h3 className='text-center'>Welcome Back</h3>
            <form action="" className='col-md-5 mx-auto'>
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Email</label>
                        <input type="email" className="form-control" id="firstName" placeholder="parthvaghani210@gmail.com" />
                    </div>
                </div>
                <div className="">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Password</label>
                        <input type="password" className="form-control" id="firstName" placeholder="******** " />
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
                    login
                </button>
                <span className='text-center d-flex align-items-center justify-content-center mt-3'>Dont have an account?  <a href=''>Sign up for Free</a></span>
            </form>
        </div>
    )
}

export default Login
