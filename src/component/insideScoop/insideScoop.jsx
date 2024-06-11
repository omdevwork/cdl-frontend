import React from 'react'
import './insideScoop.css'
import videoplay from '../../assest/video.png'
import insideScoop from '../../assest/indiascoop.png'

const InsideScoop = () => {
    return (
        <div className='mx-4 InsideScoop'>
            <div className="container">
                <h2 className="text-center mb-8 title">The Inside Scoop</h2>
            </div>
            <div className="row pb-5 pt-4">
                <div className="col-12  d-flex flex-wrap InsideScoopbox">
                    <div className="col-12 col-lg-6 InsideScoopimg position-relative">
                        <img src={insideScoop} alt="" className='img-fluid'/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="overflow-y-scroll   InsideScoopcontent">
                            <h4 className="mb-4 text-center">PARTH VAGHANI</h4>
                            <p className="text-gray-600 text-center">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsideScoop
