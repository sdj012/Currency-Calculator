import determinePrice from './PackagerHelper';
import generateSentence from './PackagerHelper';

export default generateOptions=(series)=>{ //Packages Array Of Numbers, Determines and Adds Price
 
  let array=[];
  let list=[];

  console.log("generateOptions series: " + series);

  let uniqueID=uuid.v1();
  let optionsString="";
  let price=determinePrice(series)

  // Group Same Values

  series.map(number=>{

    if(array.findIndex( obj => obj.value === number) ===-1){ // If Group of Numbers Does Not Exist, Create New

      list.push(number);
      let grouped={};
      grouped.value=number;
      grouped.count=1;

      // console.log("grouped: " + grouped + "number: " + number)

      
      array.push(grouped);

    } else { // If Group of Numbers Exist, Add to Group's "Count"

      let index=array.findIndex( obj => obj.value == number);
      array[index].count+=1;

    }

  })
  console.log("array: " + JSON.stringify(array));

  optionsString=generateSentence(array);

  const optionsObject ={
    id: uniqueID,
    options: optionsString,
    price: price,
  }

  console.log("optionsObject: " + optionsObject)



  return optionsObject

}
