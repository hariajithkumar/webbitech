import React from 'react'
import success from '../Image/successfully.png'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate = useNavigate();
    const map = () =>{
        navigate('/Map')
    }
    return (
        <div className='text-center home-bg' >
            <div className='w-50 mx-auto success-padding'>
                <img src={success} className='' />
            </div>
            <div className='congratulations '>
                <h1>Congratulations</h1>
                <p className='py-4'>You have successfully created your N Smart account</p>
                <button className='create-btn p-3 mb-3' onClick={map}>Explore our plans</button>
            </div>
        </div>
    )
}

export default Success
