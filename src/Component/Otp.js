import React from 'react'
import otp from '../Image/otp.png'
import { useNavigate } from 'react-router-dom'
function Otp() {
    const navigate = useNavigate()
    const singup = () => {
        navigate('/Register')
    }
    const success = () => {
        navigate('/Success')
    }
    return (
        <div>
            <div className='text-center home-bg'>
                {/* <div className='w-50 mx-auto text-start'>
                    <i className="fa fa-user"></i>
                </div> */}
                <div className='w-50 mx-auto pt-3'>
                    <img src={otp} className='' />
                </div>
                <div className=''>
                    <h2 className='text-center mx-auto mt-4'>OTP Verification</h2>
                    <p className='mx-auto pt-2'>Enter the OTP sent to <span className='text-danger'>+234-7087239242</span></p>
                </div>
                <div className='mt-4 pb-3'>
                    <span>Didn’t recieve an OTP ?<a href='' className='link-success text-decoration-none text-danger' onClick={singup}> Resend OTP</a></span>
                </div>
                <div className='mx-auto mt-3'>
                    <div className="otp-field mb-4">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div className='mt-5 p-5'>
                    <button className='create-btn p-3 mb-3' onClick={success}>Verify & Proceed</button>
                </div>


            </div>
        </div>
    )
}

export default Otp
