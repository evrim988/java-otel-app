import { url } from 'inspector'
import React from 'react'
import './BookingContentImage.css'

function BookingContentImage() {
  return (
    <div className='container' style={{position: 'relative'}}>
        <img className='booking-img' src="https://images.odamax.com/img/1024x768/odamax/image/upload/Limnos_Otel__20240312182227_0.jpg" style={{width: 1272, height: 500}} />
        <div className="row">
            <h1 className='booking-header' >BOOKING</h1>
        </div>
    </div>
  )
}

export default BookingContentImage