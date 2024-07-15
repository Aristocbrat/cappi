import React from 'react'
import rect from './../assests/images/Rect.png'


const Body3 = () => {
  return (
    <div className='thirdPage mt-lg-5 '>
       <div className='trifext d-flex flex-lg-row flex-column  '>
        <div>
          <p className='future fw-semibold fs-lg-2 py-3 py-lg-0 px-4 px-lg-0'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
          </p>
          <a href='#' className='request mt-lg-5 pt-5 '>Request Early Access to Get Started</a>
        </div>
        <div className='all d-flex flex-column'>
          <div firstline>
          <img src={rect} className='pt-2 mx-auto mx-lg-0' alt='rectangle'/>
          <p className='text-white pple mx-auto mx-lg-0'>Improving end distrusts instantly </p>
          </div>
          <div firstline>
          <img src={rect} className='pt-3 mx-auto mx-lg-0' alt='rectangle'/>
          <p className='text-white ppl pt-3 mx-auto mx-lg-0 '>Become the tended active</p>
          </div>
          <div firstline>
          <img src={rect} className='pt-3 mx-auto mx-lg-0'  alt='rectangle'/>
          <p className='text-white ppl pt-3 mx-auto mx-lg-0'>Message or am nothing</p>
          </div>
          <div firstline>
          <img src={rect} className='pt-3 mx-auto mx-lg-0' alt='rectangle'/>
          <p className='text-white ppl pt-3 mx-auto mx-lg-0'>Really boy law county</p>
          </div>
        </div>
        <div className='from  d-flex flex-column gap-4 mt-lg-2'>
          <p className='tt w-75 mx-auto mx-md-auto mx-lg-0'>From they fine john he give of rich he. 
            They age and draw mrs like.
             Improving end distrusts may instantly was household applauded.</p>
          <p className='tt w-75 mx-auto mx-lg-0'>Considered sympathize ten uncommonly occasional assistance sufficient not.
             Letter of on become he tended active enable to.</p>
          <p className='tt w-75 mx-auto mx-lg-0'>Led ask possible mistress relation elegance eat likewise debating.
             By message or am nothing amongst chiefly address.</p>
          <p className='tt w-75 mx-auto mx-lg-0'>Really boy law county she unable her sister.
             Feet you off its like like six. Among sex are leave law built now. 
             In built table in an rapid blush.</p>
        </div>
       </div>
    </div>
  )
}

export default Body3
