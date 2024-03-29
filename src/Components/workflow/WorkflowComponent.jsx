import React,{useState} from 'react'
import { RectangleComponent } from '../testcomponent/RectangleComponent'
import './workflowcomponent.css'
import { CircleComponent } from '../testcomponent/CircleComponent';

export const WorkflowComponent = () => {

    const [divList, setDivList] = useState([]);
    const [cirleList, setCirleList] = useState([]);
    const [action,setAction] = useState("");
    const [rectangleComponentData, setrectangleComponentData] = useState({
        rectangle_data:'',
        circle:'',
        rectangle:'',
        data1:''
      });
    
        const handleClick = (d) => {
            // Perform your action here
            console.log('Div clicked!');
            console.log(action);
            console.log(rectangleComponentData.data1)
            var newDiv ;
            if(action=="rectangle")
            {
                    console.log('rectangel clicked')
                    newDiv = <RectangleComponent data={rectangleComponentData.rectangle_data}>{rectangleComponentData.rectangle_data}</RectangleComponent>;
                    setDivList([...divList, newDiv]);
                }
                else
                if(action=="circle")
                {
                console.log('circle clicked')
                newDiv = <CircleComponent data={rectangleComponentData.rectangle_data}>{rectangleComponentData.rectangle_data}</CircleComponent>;
                setCirleList([...cirleList, newDiv]);

            }
          // const newDiv = <div key={divList.length}>Dynamic Div Content {divList.length}</div>;
            // Add the new div to the list
          };

          const handleChange = (e) => {
            const { name, value } = e.target;
            setrectangleComponentData({
              ...rectangleComponentData,
              [e.target.name]: e.target.value
            });
          };
          
          
  return (

    <>
     <RectangleComponent/>
     <div> <input type="text" name="rectangle_data" placeholder='Enter data' value={rectangleComponentData.rectangle_data} onChange={handleChange} required/></div>
    <div className='custom-button' name = "rectangle" onClick={()=> {setAction("rectangle"); handleClick()}} >
       Rectangle
    </div>
    <div className='custom-button' name ="circle" onClick={()=> {setAction("circle") ; handleClick()}} >
       Circle
    </div>
    <div>
       
        {divList}
        {cirleList}
    </div>

    
    
    </>
  )
}
