import React from 'react'
import './testComponent.css'
import Draggable from 'react-draggable';

export const CircleComponent = (props) => {
  return (<>
     <Draggable>
   <div className='round'>{props.data}</div>
   </Draggable>
    </>)
  
}



