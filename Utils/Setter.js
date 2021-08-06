import { setOptions } from '../../oldstore.js';
import store from '../../oldstore.js';
import generateOptions from './Packager';
import { useSelector, useDispatch } from 'react-redux';

export default function setData(data){ // Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.

  let arrayOfOptions=[];

  //ASync
  data.map(set=>{ 

    console.log("setData:Mapping... " + set);
    console.log(generateOptions(set)); // To Set 
    arrayOfOptions.push(generateOptions(set))

  })

  return arrayOfOptions;

}

