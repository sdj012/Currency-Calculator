
import setData from './Setter';

export default configureSet=(arr,sum)=>{ // configureSet -> determines set and passes Set to -> setData

  let output=[];

  function findCombination(remainder,path,entry){
    
    if(remainder<0){
      console.log("Breaking Out of Loop: Negative Remainder " + remainder*-1 + " path: " + path)
      console.log("Surplus: " + remainder*-1 + "Path: " + path)
      output.push([...path]);
      return;
    }

    if(remainder === 0){
      output.push([...path]);
      return;
    }
    
    for(let i=entry; i < arr.length; i++){
      findCombination(remainder-arr[i],[...path,arr[i]],i); // Is operating   a for loop; Repeats this Line Until Broken Out Of; 
    }

  }

  findCombination(sum,[],0);
  console.log(output);

  setData(output);

  return output;
  
}


