import React, {useState} from "react";
import axios from "axios";
import Timeline from '../Timeline/timeline';
import DimmerLoader from  '../DimmerLoader/dimmerLoader';
import {Form,Button} from "semantic-ui-react";

/* 
  ShoutMain component which adds and lists the shouts
  */
const ShoutMain = ({}) => {
    const [text, SetText] = useState('');
    const [shouts,setShouts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getShoutList = () => {
	    const query = `query {
				  shouts {
				    id
				    contents
				    createdAt
			}}`;	
			
			axios({
			  url: `http://localhost:3000/api/graphql?query=${query}`,
			  method: 'get',
			}).then((result) => {
			  console.log(result.data.data.shouts)
			  setShouts(result.data.data.shouts);
			  setLoading(false);
			}).catch(error => {
	           console.log('Some Error Occured');
	        }); 
	}


    const addShout = () => {
    	console.log('addShout',addShout);
	    setLoading(true);
	   	axios({
			  url: 'http://localhost:3000/api/graphql',
			  method: 'post',
			  data: {
			    query: `
			      mutation CreateBook {
				  createShout(contents: "${text}") {
				    contents
				  }
				}`
			  }
			}).then((result) => {
			  console.log('addresult',result.data)
			  getShoutList();
			}).catch(error => {
               console.log('Some Error Occured');
               setLoading(false);
          	}); 
			SetText('');
	}
    
    
    const getShouts = () => {
	  if(text.length!=0){
		addShout();
	  }else{
		getShoutList();
	  }
    }

    return(<>
    	<center><Form className='shout-form'>
		  <textarea value={text} onChange={e => SetText(e.target.value)}>
		  </textarea>
		</Form>
		<Button className='btn-shout' onClick={getShouts}>Shout!</Button>
		</center>
		{loading ? (<DimmerLoader/>): (<Timeline shoutsList={shouts}/>)}
    </>);
}
               
export default ShoutMain;