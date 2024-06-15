import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
// import Banner from './component/banner/banner';
// import Categories from './component/categories/categories';
// import CustomizeJewelry from './component/customizeJewelry/customizeJewelry';
// import InsideScoop from './component/insideScoop/insideScoop';
// import FeaturedInSlider from './component/featuredIN/featuredIN';
// import TestimonialSlider from './component/testimonialSlider/testimonialSlider'; 
import Header from  './component/Header/Header';
// import Hero from './component/hero/hero';
// import Access from './component/access/access';
// import Promis from './component/promise/promis';
// import Instagram from './component/instagram/instagram';
// import Knowledge from './component/blog/knowledge';
// import Visitourstore from './component/visitOurStore/visitourstore';
// import from from './component/from/from';
import Home from './Pages/home';
import { Route, Routes } from 'react-router-dom';
import Productpage from './Pages/productpage';
import Categorypage from './Pages/categorypage';
import Contactus from './Pages/contactus';
import Worldofcdl from './Pages/world-of-cdl';
import Signup from './Pages/signup';
import Login from './Pages/login';

function App() {
  return (
    <>
      {/* <Navbar /> 
      <Header />
      <Hero />
      <Banner />
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
      <from /> */}

      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Productpage />} />
        <Route path='/categorypage' element={<Categorypage />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/world-of-cdl' element={<Worldofcdl />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Login />} />
        {/* <Route path='/contact' element={<Contact_page />} />  */}
        {/* <Route path='/about' element={<About /> }/> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
