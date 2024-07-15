import React from 'react'
import rect from './../assests/images/Rect.png'


const Body2 = () => {
  return (
    <div className='secondPage mx-auto'>
      <img src={rect} className="p-5"  alt='rectangle'/>
      <div className='wigpt d-flex flex-column flex-lg-row justify-content-between px-lg-4 px-2'>
        <p className='fw-bold ppt text-white fs-4 ms-lg-3'>What is GPT-3</p>
        <p className=' gpttext w-75 px-4 py-2 py-lg-0'>We so opinion friends me message as delight.
           Whole front do of plate heard oh ought. His defective nor convinced residence own. 
           Connection has put impossible own apartments boisterous.
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
      </div>
      <div className='posses d-flex justify-content-evenly justify-content-lg-between'>
        <p className='poss fw-bold  w-50 mt-lg-5 mt-2 ms-lg-5'>The possibilities are beyond your imagination</p>
        <p className='explore w-25 mt-lg-5 pt-lg-5 '>Explore The Library</p>
      </div>
      <div className='d-flex flex-column flex-lg-row tri ms-lg-3 '>
      <div className='mt-lg-5 px-lg-4 ms-lg-2 po'>
        <img src={rect} alt='rectangle'/>
        <h4 className='text-white mx-5 mx-lg-0 px-5 px-lg-0'>Chatbots</h4>
        <p className='opinion onep px-3 px-lg-0 ms-2 ms-lg-0 w-75'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
      </div>
      <div className='mt-lg-5 px-lg-4 ms-lg-2  po'>
        <img src={rect} alt='rectangle'/>
        <h4 className='text-white mx-5 mx-lg-0 px-5 px-lg-0 '>Knowledgebase</h4>
        <p className='w-100 px-3 px-lg-0 ms-2 ms-lg-0 opinion'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
           As put impossible own apartments b. </p>
      </div>
      <div className='mt-lg-5 px-lg-4 ms-lg-5 po popo'>
        <img src={rect} alt='rectangle'/>
        <h4 className='text-white mx-5 mx-lg-0 px-5 px-lg-0'>Education</h4>
        <p className='w-100 px-lg-0 px-3 ms-2 ms-lg-0  opinion'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
           As put impossible own apartments b </p>
      </div>
      
      </div>
      
    </div>
  )
}

export default Body2
