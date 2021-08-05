function determinePrice(series){

  let total=0;

  series.map(value=>{

    if(value===400) total+=6.49;
    if(value===800) total+=12.99;
    if(value===1700) total+=25.99;

    console.log("determinePrice: value " + value + "total: " + total)

  })

  total=Math.ceil(total * 100) / 100;

  return total;
}


function generateSentence(options){

  console.log("generateSentence: " + JSON.stringify(options))

  let label="";

  options.map((option)=>{
    label+="\n" + option.count + " of " +  option.value;
  })
  
  console.log(label);

  return label;

}

export { determinePrice, generateSentence};