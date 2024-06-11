import React from 'react'
import './hero.css'
import video from '../../assest/hero.mp4'
const Hero = () => {
    return (
        <>
            <section className='banner_section'>
                <div>
                    <video src={video} loop muted autoPlay></video>
                </div>
            </section>
        </>
    )
}

export default Hero
