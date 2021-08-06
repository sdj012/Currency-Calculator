import setData from "./Setter.js";

export default function configureSet(sum,arr){ // configureSet -> determines set and passes Set to -> setData

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

  return output;
  
}

  // Array of Key&Value Pairs
  // determine Price: returnPricePerPackage
  // setData: Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.
  // generateOptions: Packages Array Of Numbers, Determines and Adds Price
  // generateSentence
  // configureSet -> determines set and passes Set to -> setData

