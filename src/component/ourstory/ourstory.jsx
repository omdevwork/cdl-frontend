import React from 'react'
import './ourstory.css'
import story1 from '../../assest/story1.png'
const Ourstory = () => {
    return (
        <div className='ourstory'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className=" ourstoryleft text-center">
                        <h3>Our Story</h3>
                        <p className='mb-0'>We stepped into the business of trading loose diamonds back in 1995 with a clear vision of offering best quality diamonds at fair market price. Since then, we’ve always been committed to providing business transparency and 100% customer satisfaction. With years of experience behind us, our company has successfully carved a niche for itself and also established a potent and outstanding reputation amongst international diamond dealers.Using Internationally Approved (GIA) system to grade diamonds and High End Craftsmanship following by Strict Quality Control(QC) process, CDL FINESHINE’s collection are loved by the big players of the market</p>
                    </div>
                    <div className=" ourstoryright text-center">
                         <img src={story1} alt="story1" className='mb-3'/> 
                         <h3>Our Leadership</h3>
                         <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourstory
