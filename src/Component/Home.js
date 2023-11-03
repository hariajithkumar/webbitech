import React from 'react'
import home from '../Image/home.png'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const signin = () =>{
        navigate('/Login')
    }
    const signup = () =>{
        navigate('/Register')
    }
    return (
        <div className='text-center home-bg'>
            <div className='w-50 mx-auto'>
                <img src={home} className='' />
            </div>
            <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators carousel-btn mb-3">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='home-content'>
                            <h1 className='text-center mx-auto'>"Connecting You to The World"</h1>
                            <p className='mx-auto pt-2'>"Fast, reliable, and hassle-free. Welcome to our broadband family!"</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='home-content'>
                            <h1 className='text-center mx-auto'>"Connecting You to The World"</h1>
                            <p className='mx-auto pt-2'>"Fast, reliable, and hassle-free. Welcome to our broadband family!"</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='home-content'>
                            <h1 className='text-center mx-auto'>"Connecting You to The World"</h1>
                            <p className='mx-auto pt-2'>"Fast, reliable, and hassle-free. Welcome to our broadband family!"</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
            </div>
            <div className='mt-4'>
                <button className='create-btn p-3 mb-3' onClick={signup}>create an account</button>
            </div>
            <div className='mt-2 pb-3'>
                <a href="#" className="link-success text-decoration-none" onClick={signin}>Sign in</a>
            </div>
        </div>
    )
}

export default Home
