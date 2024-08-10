import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto  flex gap-1 my-10 py-8 text-white'>
        <Card  w={"40%"} heading={false}  />
        <Card w={"60%"} heading={true}/>
    </div>
  )
}

export default Cards;