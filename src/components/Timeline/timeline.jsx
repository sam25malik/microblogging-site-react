import React, {useState} from "react";
import {Segment} from "semantic-ui-react";

/* 
  Timeline component which displays list of all the shouts
  currently added
  */
const Timeline = ({shoutsList}) => {
    	const shoutsGrid = (shouts) => {
	        let items = [];
	        for (let i = 0; i < shouts.length; i++) {
	             let temp = (
	               <Segment raised key={i} className='timeline-item'>
	               <p><b>Title:</b> {shouts[i].contents}</p>
	               <p><b>Created at:</b> {shouts[i].createdAt}</p>
				  </Segment>
	        );
	        	items.push(temp);
        	} 
        	
        	return items;
		}
          
        return(<div className='timeline'>
               		<h2>Timeline</h2>
               		{shoutsList ? (<div>{shoutsGrid(shoutsList)}</div>): 
						(<div>No results</div>)
               		}	
                </div>);
}
               
export default Timeline;