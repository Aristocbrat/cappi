import React from 'react'
import recta  from './../assests/images/Group 99.png'
import rectas  from './../assests/images/Recta.png'
import rectb from  './../assests/images/Rectb.png'
import rectba from './../assests/images/Rectba.png'
import rbb  from  './../assests/images/Rectbb.png'
import rectca from './../assests/images/rectca.png'
import rectda from './../assests/images/Rectda.png'
import rectea from './../assests/images/Rectea.png'


const Body6 = () => {
  return (
  <div className='sixthPage  mx-4 d-flex flex-column flex-lg-row flex-wrap gap-md-3'>
    <div className=' w-25 ms-lg-5 ms-4  pb-5 pb-lg-0 and'>
       {/* <img src={recta} className='w-75' alt='a' />  */}
       <img src={rectas} className='a' /> 
       <img src={rectb} className='a ba' /> 
       <div className='position-absolute dd  ps-3 '>
       <span className='spanner text-white'>Sep 26, 2021</span><br/>
       <span className='pa y text-white  w-25'>
        GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
        <p className='rfp oc text-white'>Read Full Article</p>
        </div>
  </div>
  <div className='w-25 cand pb-5  pb-lg-0'>
      <img src={rectba}  className='c' alt='c'/>
      <img src={rbb} className='d' alt='d'/>
      <div className='position-absolute ss  ps-lg-3 ps-4 '>
      <span className='spanner text-white '>Sep 26, 2021</span><br/>
       <span className='pa  x text-white  w-25'>
        GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
        <p className='rfp pt-2 text-white ps-3 ps-lg-0 ps-md-0'>Read Full Article</p>
        </div>
  </div>
  <div className='w-25 ms-lg-5 ms-4 pb-4 pb-lg-0 cand e '>
  <img src={rectca} className='c' alt='e'/>
  <img src={rbb} className='d' alt='f'/>
  <div className='position-absolute  ss ps-lg-3 ps-4'>
  <span className='spanner text-white'>Sep 26, 2021</span><br/>
       <span className='pa x text-white w-25'>
        GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
        </div>
  <p className='rfp  gt ms-lg-3 text-white ps-3 ps-lg-0 ps-md-2 '>Read Full Article</p>
  </div>
 
  <div className='w-25 gand pb-4 pb-lg-0 ps-lg-3 pb-md-0 '>
  <img src={rectda} className='c' alt='g' />
  <img src={rbb} className='d' alt='d'/>
  <div className='position-absolute ss ps-lg-3 ps-4'> 
  <span className='spanner text-white mt-md-5'>Sep 26, 2021</span><br/>
       <span className='pa x text-white w-25'>
        GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
        <p className='rfp pt-2 text-white ps-3 ps-lg-0 ps-md-0 '>Read Full Article</p>
        </div>
  </div>
  <div className='w-25 eand '>
    <img src={rectea} className='c ' alt='e' />
    <img src={rbb} className='d' alt='f'/>
    <div className='position-absolute ss ps-lg-3 ps-4'>
    <span className='spanner text-white'>Sep 26, 2021</span><br/>
       <span className='pa x text-white '>
        GPT-3 and Open  AI is the future. Let us exlore how it is?</span>
        <p className='rfp pt-2 text-white ps-3 ps-lg-0 ps-3 ps-lg-0 mt-md-5 ps-md-0'>Read Full Article</p>
        </div>
  </div>
     

  </div>
  )
}

export default Body6
