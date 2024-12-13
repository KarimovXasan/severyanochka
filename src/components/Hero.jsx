import React from 'react'
import { heroPhoto } from '../assets/data'

const Hero = () => {
    return (
        <section className='bg-hero bg-center bg-cover items-center'>
            <div className="container">
                <div className="flex items-center space-x-7 px-8">
                    <img src={heroPhoto} alt="Hero Image" />
                    <h1>Доставка бесплатно от 1000₽</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero