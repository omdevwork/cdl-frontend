import React from 'react'
import './map.css'
const Map = () => {
    return (
        <div className='map container'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.39765786618!2d72.83259597503685!3d21.2160741804805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2435dd3853%3A0x71b8e8bead499b36!2sNandudoshi%20ni%20wadi%20Ground!5e0!3m2!1sen!2sin!4v1718032185804!5m2!1sen!2sin" 
                
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    )
}

export default Map 