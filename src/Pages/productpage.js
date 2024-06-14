import React from 'react'
import ProductSlider from '../component/productpage/productpage'
import TabsProduct from '../component/tabsproduct/tabsproduct'
import ProductpageSlider from '../component/productslider/productslider'
// import ProductpageSlider from '../component/productpage/productpage'

const Productpage = () => {
  return (
    <div>
      <ProductSlider /> 
      <TabsProduct />
      <ProductpageSlider />
    </div>
  )
}

export default Productpage
