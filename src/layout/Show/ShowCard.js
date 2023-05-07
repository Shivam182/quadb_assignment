import React, { Fragment } from 'react'
import './ShowCard.css'

const ShowCard = () => {
  return (
    <Fragment>
        <div className='show-card'>
            <div className='show-img'>
                <img src='' alt='show-image'/>
            </div>
            <div className='show-details'></div>
        </div>
    </Fragment>
    
  )
}

export default ShowCard;