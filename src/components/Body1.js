import React from 'react'
import headill from "./../assests/images/headill.png"

import signup from "./../assests/images/Group 81.png"
import clogo from "./../assests/images/clogo.png"



const Body1 = () => {
  return (
    <div >
      <div className='firstpage p-5 m-auto d-flex flex-lg-row flex-column  w-100 '>
      <p className='letsbuild fw-medium d-lg-block d-flex  position-relative w-100  '>
      <span className='line1'>Let’s Build Something</span><br />
      <span className='line2'>amazing with GPT-3</span><br />
      <span className='line3'>OpenAI</span>
      </p>
      <img src={headill} className=' headill w-50 position-absolute ' alt='header illustration'/>
    </div>
    <div className='subtext px-lg-5 d-flex flex-column flex-md-row'>
       <p className='textSub position-absolute  px-4 px-lg-0 '>Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
         Party we years to order allow asked of.</p>
         <div className='d-flex e-g flex-column flex-lg-row flex-md-column bg-danger'>
         <input placeholder="Your email address" type="email" className="form-control sin ps-lg-5 transparent-border " />
         <button className='text-white getstarted d-flex align-content-center  pt-lg-4 justify-content-center '>Get started</button>
         </div>
        
        
    </div>
    
    <img src={signup} className='w-25 px-lg-5 ms-5 ms-lg-5 groupfoto' alt='signup image'/>
    
    <span className='text-white spantexts w-50 position-absolute'>1,600 people requested access a visit in last 24 hours</span>
    <img src={clogo}  className='w-50 clogo pb-lg-5' alt='companies logo'/>
    </div>
    
  )
}

export default Body1
