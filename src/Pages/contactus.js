import React from 'react'
import Contactusbanner from '../component/contactusbanner/contactusbanner'
import Contactpageform from '../component/contactpageform/contactpageform' 
import Map from '../component/map/map'
import FAQ from '../component/FAQ/faq'
import Access from '../component/access/access'

const Contactus = () => {
  return (
    <div>
        <Contactusbanner />
        <Contactpageform />  
        <Map />
        <FAQ />
        <Access />
    </div>
  )
}

export default Contactus
