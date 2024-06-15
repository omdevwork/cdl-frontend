import React from 'react' 
import Worldbanner from '../component/worldbanner/worldbanner'
import Worldcdl from '../component/worldcdl/worldcdl'
import Ourstory from '../component/ourstory/ourstory'  
import FAQ from '../component/FAQ/faq'
import Visitourstore from '../component/visitOurStore/visitourstore';
import WhyCDL from '../component/whyCDL/whycdl';



const Worldofcdl = () => {
  return (
    <div> 
      <Worldbanner />
      <Worldcdl />
      <Ourstory /> 
      <WhyCDL />
      <FAQ />
      <Visitourstore /> 
    </div>
  )
}

export default Worldofcdl
