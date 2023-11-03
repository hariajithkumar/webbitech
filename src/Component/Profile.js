import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../Image/profile.png'
import notification from '../Image/notification.png'
import good from '../Image/good.png'
import offer from '../Image/offer.png'
import social from '../Image/friends-social-media.png'


function Profile() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <header className='w-50 mx-auto heading py-5'>
                <div className='row m-0'>
                    <div className='col-2 text-center'>
                        <img src={profile} />
                    </div>
                    <div className='col-8 text-start'>
                        <h5 className='good'><span className='mx-1'>Good morning</span><img src={good} /><br />Jeff Kim</h5>
                    </div>
                    <div className='col-2 text-center'>
                        <img src={notification} />
                    </div>
                </div>
                <div className='plan-card mt-4'>
                    <div className='row comba-card p-2 m-0'>
                        <div className='col-6'>
                            <p className='m-0'>Your current plan</p>
                            <h4>Home plan combo</h4>
                        </div>
                        <div className='col-6 text-center'>
                            <h4 className='m-0'>$ 1499</h4>
                            <p>Change plan <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
                        </div>
                    </div>
                    <div className='row m-0 py-3 card-date'>
                        <div className='col-4'>
                            <p className='m-0'>30/10/2023</p>
                            <h6>Expiry date</h6>
                        </div>
                        <div className='col-4'>
                            <p className='m-0'>Unlimited</p>
                            <h6>Data Usage</h6>
                        </div>
                        <div className='col-4 py-2'>
                            <button className='p-2'>Pay Now</button>
                        </div>
                    </div>
                </div>
                <div className='section p-2 mt-5'>
                    <div className='w-75 mx-auto text-center'>
                        <hr className='hr'/>
                        <img src={offer} className='w-100 py-2' />
                    </div>
                    <div className='row m-0 pt-4 see-all'>
                        <div className='col-6 text-center'>
                            <h2>Recommended Plans</h2>
                        </div>
                        <div className='col-6 text-center'>
                            <p>See all</p>
                        </div>
                    </div>
                    <div className="card mb-3 border-0 w-75 mx-auto p-2">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={social} className='w-100 h-100' alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">$ 1199/month*</h5>
                                    <div className='row m-0'>
                                        <div className='col-6'>
                                            <p>speed</p>
                                            <hr />
                                            <p>100MBS</p>
                                        </div>
                                        <div className='col-6'>
                                            <p>Data</p>
                                            <hr />
                                            <p>Unlimited</p>
                                        </div>
                                    </div>
                                    <p className='text-end'>1 Mbps Post FUP speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row m-0 pt-4 see-all'>
                        <div className='col-6 text-center'>
                            <h2>Other Plans</h2>
                        </div>
                        <div className='col-6 text-center'>
                            <p>See all</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Profile
