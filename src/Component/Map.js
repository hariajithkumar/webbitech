import React from 'react'
import right from '../Image/true.png'
import location from '../Image/location.png'
import { useNavigate } from 'react-router-dom'


function Map() {
    const naviagte = useNavigate()
    const mapadd = () =>{
        naviagte('/Mapaddress')
    }
    return (
        <div>
            <div className='text-center home-bg p-5'>
                <div className='mx-auto  py-2 map-location'>
                    <img src={right} /><span className='mx-2'>Thanks! Your mobile number is verified.</span>
                </div>
                <div className='w-50 mx-auto'>
                    <img src={location} />
                </div>
                <div className='home-content'>
                    <h1 className='text-center w-50 mx-auto my-3'>What is Your Location?</h1>
                    <p className='mx-auto py-3 location-content'><b>We need to know your location in order to suggest nearby services.</b></p>
                </div>
                <div className='mt-4 p-3'>
                    <button className='create-btn p-3 mb-3' onClick={mapadd}>Allow location manually</button>
                </div>
                <div className='mt-2 pb-2'>
                    <a href='' className='link-success text-decoration-none'> Enter location manually</a>
                </div>
            </div>
        </div>
    )
}

export default Map
