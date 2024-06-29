import React from 'react'
import headill from "./../assests/images/headill.png"
import form from "./../assests/images/Form.png"
import signup from "./../assests/images/Group 81.png"
import clogo from "./../assests/images/clogo.png"



const Body1 = () => {
  return (
    <div >
      <div className='firstpage p-5 m-auto d-flex flex-lg-row flex-column  '>
      <p className='letsbuild fw-medium d-lg-block d-flex  position-relative '>
      <span className='line1'>Let’s Build Something</span><br />
      <span className='line2'>amazing with GPT-3</span><br />
      <span className='line3'>OpenAI</span>
      </p>
      <img src={headill} className=' headill w-50 position-absolute ' alt='header illustration'/>
    </div>
    <div className='subtext px-lg-5'>
       <p className='textSub position-absolute  px-4 px-lg-0 '>Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
         Party we years to order allow asked of.</p>
        <img src={form} className='form ms-lg-5 ms-4 ps-3 ps-lg-0' alt="form image"/>
    </div>
    <img src={signup} className='w-25 px-lg-5 ms-5 ms-lg-5 groupfoto' alt='signup image'/>
    <span className='text-white spantexts w-50 position-absolute'>1,600 people requested access a visit in last 24 hours</span>
    <img src={clogo}  className='w-50 clogo pb-lg-5' alt='companies logo'/>
    </div>
    
  )
}

export default Body1
