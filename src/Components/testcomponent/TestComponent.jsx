import React from 'react'
import './testComponent.css'
import Draggable from 'react-draggable';

export const TestComponent = () => {
  return (
    <>
  
   <Draggable>
   <div className='round'>1</div>
   </Draggable>
   <Draggable>
   <div className='rectangle-rounded'>1</div>
   </Draggable>

  </>
  )
}

