import React from 'react'
import leftarrow from '../Image/chevron-left.png'
import { useNavigate } from 'react-router-dom'

function Search() {
    const navigate = useNavigate();
    const back = () =>{
        navigate('/Mapaddress')
    }
    return (
        <div className='text-center home-bg' style={{height:'100vh'}}>
            <div className='w-25 mx-auto text-start py-3'>
                <span onClick={back}><img src={leftarrow} className='mx-2' /></span>
                <span className='h1-search'>Enter your address</span>
            </div>
            <div class="input-group w-25 mx-auto my-3">
                <i class="fa fa-search position-absolute search" ></i>
                <input className="form-control position-relative input-box" type="text" />
            </div>
            <div className='w-25 mx-auto py-3 text-start'>
                <i className="fa fa-location-arrow text-success me-3"></i>
                <span className='current-location'>Use my current location</span>
                <hr/>
            </div>
            <div className='w-25 mx-auto text-start py-3'>
                <p className='search-result'>SEARCH RESULT</p>
            </div>
            <div className='w-25 mx-auto py-3 text-start'>
                <i className="fa fa-location-arrow text-success me-3"></i>
                <span className='current-location'>Coimbatore</span>
            </div>
        </div>
    )
}

export default Search
