import React from 'react' 
import Categories from '../component/categories/categories';
import CustomizeJewelry from '../component/customizeJewelry/customizeJewelry';
import InsideScoop from '../component/insideScoop/insideScoop';
import FeaturedInSlider from '../component/featuredIN/featuredIN';
import TestimonialSlider from '../component/testimonialSlider/testimonialSlider';  
import Hero from '../component/hero/hero';
import Access from '../component/access/access';
import Promis from '../component/promise/promis';
import Instagram from '../component/instagram/instagram';
import Visitourstore from '../component/visitOurStore/visitourstore';
import Knowledge from '../component/blog/knowledge'
import Productpage from '../component/productpage/productpage';
import CdlForm from '../component/from/from';
const Home = () => {
  return (
    <> 
      <Hero />
      {/* <Banner /> */}
      <Categories />
      <CustomizeJewelry  />
      <InsideScoop />
      <FeaturedInSlider />
      <Access />
      <Promis />
      <TestimonialSlider />
      <Instagram />
      <CdlForm />
      <Knowledge />
      <Visitourstore /> 
    </>
  )
}

export default Home
