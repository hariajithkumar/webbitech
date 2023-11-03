import React from 'react'
import signup from '../Image/signup.png'
import logo from '../Image/logo.png'
import forget from '../Image/forget pass.png'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const signup = () => {
        navigate('/Register')
    }
    const main = () => {
        navigate('/index')
    }
    return (
        <div>
            <div className='text-center home-bg'>
                <div className='w-50 mx-auto pt-3'>
                    <img src={signup} className='' />
                </div>
                <div className='w-50 mx-auto m-5'>
                    <img src={logo} className='' />
                </div>
                <div className='home-content'>
                    <h1 className='text-center mx-auto'>hello again!</h1>
                    <p className='mx-auto pt-2'>wellcome back you’ve been missed!</p>
                </div>
                <form className='w-25 mx-auto'>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-lock"></i></span>
                        <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-eye-slash"></i></span>
                    </div>
                    <p className='mt-3 text-start'>forget your password?</p>
                </form>
                <div className='mt-4'>
                    <button className='create-btn p-3 mb-3' onClick={main}>Sign in</button>
                </div>
                <div className='w-50 mx-auto'>
                    <img src={forget} className='' />
                </div>
                <div className='mt-2 pb-3'>
                    <span>New to N Smart ?<a href='' className='link-success text-decoration-none' onClick={signup}> Sign up</a></span>
                </div>
            </div>
        </div>
    )
}

export default Login
