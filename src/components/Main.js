import React from 'react'

const Main = (props) => {
  return (
    <div className='card'>
      <div className='image'>
      <img src={`require(./images/${props.img})`}
      className='card-image'
      />
      </div>
      <div className='details'>
      <h3 className='country'><i class="fa-solid fa-location-dot"></i> {props.item.location}</h3>
      <a href={props.item.googleMapsUrl}>View on Google Maps</a>
      <h1 className='title'>{props.item.title}</h1>
      <h4 className='date'>{props.item.startDate} - {props.item.endDate}</h4>
      <p className='description'>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Main
