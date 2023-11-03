import React from 'react'
import { useNavigate } from 'react-router-dom'
import maplocation from '../Image/maplocation.png'
import logo from '../Image/logo.png'

function Address() {
    const navigate = useNavigate()
    const singin = () => {
        navigate('/Login')
    }
    const address = () => {
        navigate('/Search')
    }
    return (
        <div>
            <div className='text-center home-bg'>
                <div className='w-50 mx-auto pt-3'>
                    <img src={maplocation} className='' />
                </div>
                <div className='w-50 mx-auto m-5'>
                    <img src={logo} className='' />
                </div>
                <div className='home-content'>
                    <h1 className='text-center mx-auto my-4'>Enter your address</h1>
                </div>
                <form className='w-25 mx-auto address'>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-home"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Address" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-map-marker"></i></span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-location-arrow"></i></span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text p-3" id="basic-addon1"><i className="fa fa-globe"></i></span>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </form>
                <div className='mt-4'>
                    <button className='create-btn p-3 mb-3' onClick={address}>Submit</button>
                </div>
                <div className='mt-2 pb-3'>
                    <span>Already have an account?<a href='' className='link-success text-decoration-none' onClick={singin}> Sign in</a></span>
                </div>
            </div>
        </div>
    )
}

export default Address
