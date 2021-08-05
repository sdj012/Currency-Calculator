import { setOptions } from '../../Store/oldstore.js';
import store from '../../Store/oldstore.js';
import generateOptions from './Packager';
import { useSelector, useDispatch } from 'react-redux';

export default function setData(data){ // Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.


  //ASync
  data.map(set=>{ 

    console.log("setData:Mapping... " + set);
    console.log(generateOptions(set)); // To Set 

    store.dispatch(setOptions({reduxSample:"test"}));

    

    // array.push(this.generateOptions(set)); // places Objects returned from generateOptions into array

    // this.setState(prevState=>({
    //   Options: [...prevState.Options,this.generateOptions(set)]
    // }),function(){    
    //   console.log("this.state.Options: "+ this.state.Options)
    // })

  })

}