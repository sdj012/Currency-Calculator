import { useSelector, useDispatch } from 'react-redux';

function determinePrice(series){

  const configurations = useSelector((state) => state.settings.configurations)

  let total=0;

  series.map(value=>{

    total += configurations.find(bundle => bundle.id === value).price

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