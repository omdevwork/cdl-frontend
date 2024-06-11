import React from 'react'
import  './banner.css'

const Banner = () => {
    return (
        <div>
            <section className="banner">
                <video autoPlay loop muted className="video-background">
                    <source src="https://media.istockphoto.com/id/1189172259/video/wedding-rings-guy-put-the-ring-on-the-girls-finger.mp4?s=mp4-640x640-is&k=20&c=tG9dBl3I06DtvLA3lWekmk2_ylSvv3si8zNS7XPs9eI=" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> 
            </section>
        </div>
    )
}

export default Banner
