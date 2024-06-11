import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Banner from './component/banner/banner';
import Categories from './component/categories/categories';
import CustomizeJewelry from './component/customizeJewelry/customizeJewelry';
import InsideScoop from './component/insideScoop/insideScoop';
import FeaturedInSlider from './component/featuredIN/featuredIN';
import TestimonialSlider from './component/testimonialSlider/testimonialSlider'; 
import Header from  './component/Header/Header';
import Hero from './component/hero/hero';
import Access from './component/access/access';
import Promis from './component/promise/promis';
import Instagram from './component/instagram/instagram';
import Knowledge from './component/blog/knowledge';
import Visitourstore from './component/visitOurStore/visitourstore';

function App() {
  return (
    <>
      <Navbar /> 
      <Header />
      <Hero />
      {/* <Banner /> */}
      <Categories />
      <CustomizeJewelry />
      <InsideScoop />
      <FeaturedInSlider />
      <Access />
      <Promis />
      <TestimonialSlider />
      <Instagram />
      <Knowledge />
      <Visitourstore />
    </>
  );
}

export default App;
