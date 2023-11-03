import React from 'react'
import address from '../Image/address.png'
import logo from '../Image/logo.png'
import forget from '../Image/forget pass.png'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const singin = () =>{
        navigate('/Login')
    }
    const otp = () => {
        navigate('/OTP')
    }
    return (
        <div>
            <div className='text-center home-bg'>
                <div className='w-50 mx-auto pt-3'>
                    <img src={address} className='' />
                </div>
                <div className='w-50 mx-auto m-5'>
                    <img src={logo} className='' />
                </div>
                <div className='home-content'>
                    <h1 className='text-center mx-auto'>Create an account</h1>
                </div>
                <form className='w-25 mx-auto'>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-phone"></i></span>
                        <input type="text" className="form-control" placeholder="Phone" aria-label="Userphone" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Email" aria-label="Userphone" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-lock"></i></span>
                        <input type="Password" className="form-control" placeholder="Password" aria-label="Userphone" aria-describedby="basic-addon1" />
                    </div>
                </form>
                <div className='mt-4'>
                    <button className='create-btn p-3 mb-3' onClick={otp}>Get OTP</button>
                </div>
                <div className='w-50 mx-auto'>
                    <img src={forget} className='' />
                </div>
                <div className='mt-2 pb-3'>
                    <span>Already have an account?<a href='' className='link-success text-decoration-none' onClick={singin}> Sign in</a></span>
                </div>
            </div>
        </div>
    )
}

export default Register
