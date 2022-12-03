import React from 'react'

const Meal = (props) => {
  return (
    <div className='meal box f-2-v'>
        <img src={props.image} alt={props.name} />
        <div className="meal-detailes">
            <p className='f-2'><span className='name'>{props.name}</span>{props.price}</p>
            <p>{props.details}</p>
        </div>
    </div>
  )
}

export default Meal