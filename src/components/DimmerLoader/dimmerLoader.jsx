import React from "react";
import {Segment,Placeholder} from "semantic-ui-react";

/* 
  Loader when the items are yet to be loaded
  */
const DimmerLoader = ({}) => {  
       const loaders = () => {
	        let items = [];
	        for (let i = 0; i < 5; i++) {
	             let temp = (
	              <Segment className='timeline-item' key={'loaders'+i}>
				 <Placeholder>
				    <Placeholder.Paragraph>
				      <Placeholder.Line />
				      <Placeholder.Line />
				      <Placeholder.Line />
				      <Placeholder.Line />
				    </Placeholder.Paragraph>
				  </Placeholder>
				</Segment>
	        );
	        	items.push(temp);
        	} 
        	
        	return items;
		}
          
        return(<div className='timeline'>
        		{loaders()}
        	</div>);
}
               
export default DimmerLoader;