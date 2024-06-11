import React from 'react'
import qrcode from '../../assest/QR.png'
import './visitourstore.css'
const Visitourstore = () => {
    return (
        <div className='container py-5 visitourstore'>
            <h2 className='text-center mb-5 title'>Visit Our Store</h2>
            <div className="row">
                <div className="col-12 d-flex align-items-center">
                    <div className="col-lg-6 QRpart text-center">
                        <img src={qrcode} alt="" />
                        <h4>CDL FINESHINE</h4>
                        <p>Diamond Market, Surat City <br />
                            Gujarat, India 39005</p>
                        <p>Mon - Sat 10am - 7pm <br /> Sunday 10am - 12pm</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="map-container" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.39765786618!2d72.83259597503685!3d21.2160741804805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2435dd3853%3A0x71b8e8bead499b36!2sNandudoshi%20ni%20wadi%20Ground!5e0!3m2!1sen!2sin!4v1718032185804!5m2!1sen!2sin"
                                width="600"
                                height="550"
                                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visitourstore
