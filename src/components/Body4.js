import React from 'react'
import wom from './../assests/images/wom.png'

const Body4 = () => {
  return (
    <div className='fourthPage d-flex flex-lg-row flex-column  w-100  justify-content-center'>
        <div  className='w-75 evr4'>
        <img src={wom} className='wom ' alt='woman'/>
        </div>
        <div  className='position-absolute yy'>
            <p className='early'>Request Early Access to Get Started</p>
            <p className='beyond fs-3 fw-bold'>The possibilities are beyond your imagination</p>
            <p className='yet'>Yet bed any for travelling assistance indulgence unpleasing. 
                Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
                Party we years to order allow asked of.</p>
            <a href='#' className='gst text-decoration-none'>Request Early Access to Get Started</a>
        </div>
       
    </div>
  )
}

export default Body4
