import configureSet from "./CombinationGenerator"
import generateOptions from "./Packager"
import { determinePrice, generateSentence} from "./PackagerHelper"
import setData from "./Setter"

export default function getOptions(target,settings){

  return new Promise(resolve => {

    let options=[];
    configureSet(target,settings)
    .then(result => setData(result))
    .then(result => options=result)
    .then(resolve(options))

  })

}