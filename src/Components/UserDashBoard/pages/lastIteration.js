import React from 'react'
import { data_array } from './userInputs'

const lastIteration = () => {
  return (
    <div>
        <label htmlFor="">Nombres</label>  
      {data_array.map((input) => (
        input.id === data_array.length-1 &&
        <div className="" key={input.id}>
            console.log({input.id})
           <input type={input.type} placeholder={input.placeholder1} />
           <input type={input.type} placeholder={input.placeholder2} />
           <input type={input.type} placeholder={input.placeholder3} />
            </div>
            ))}
      </div>
  )
}

export default lastIteration