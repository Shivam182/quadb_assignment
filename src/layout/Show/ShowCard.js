import React, { Fragment, useEffect, useState } from 'react'
import './ShowCard.css'
import { Link } from 'react-router-dom';

const ShowCard = (props) => {


  const {id,name, runtime, image, language, genre} = props;

//  console.log(id)
 

  return (
    <Fragment>
        <div className='show-card'>
            <div className='show-img'>
                <img src={image} alt='show-image' id='img'/>
            </div>
            <div className='show-details'>
                <h4 id='show-name'>{name}</h4>
                <h4 id='lang'>Language: {language}</h4>
                <h4 className='genre'>{genre[0]}</h4>
                <h4 className='genre'>{genre[1]}</h4>
                <h4 id='runtime'>Runtime: {(runtime === null)? 'No Data':runtime +' min'}</h4>
                <Link id='more-btn' to={`show/${id}`}>More</Link>
            </div>
        </div>
    </Fragment>
    
  )
}

export default ShowCard;