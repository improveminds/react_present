import React from 'react'
import './testComponent.css'
import Draggable from 'react-draggable';

export const RectangleComponent = (props) => {
  return (<>
     <Draggable>
   <div className='rectangle-rounded'>{props.data}</div>
   </Draggable>
    </>)
  
}



