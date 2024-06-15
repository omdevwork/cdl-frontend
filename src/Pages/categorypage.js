import React from 'react'
import CategoryPage from '../component/categorypage/categorypage'
import ProductpageSlider from '../component/productslider/productslider'
import Categorypagebanner from '../component/categorypagebanner/categorypagebanner'

const Categorypage = () => {
  return (
    <div>
        <Categorypagebanner />
        <ProductpageSlider/>
        <CategoryPage />

    </div>
  )
}

export default Categorypage
