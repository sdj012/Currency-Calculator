import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import uuid from 'react-native-uuid';

class Options extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      target: this.props.target,
      series:[400,800,1700],
      FourHundred: 6.49,
      EightHundred: 12.99,
      OneThousandSevenHundred:25.99,
      // Array of Key&Value Pairs
      Options:[],  
      OptionsWithRemainder:[],
      recursionOptions:[],
    };

    this.returnRenderItem=this.returnRenderItem.bind(this);
    this.returnRenderedOptions=this.returnRenderedOptions.bind(this);
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
    this.createOptionsObject=this.createOptionsObject.bind(this);
    this.determinePrice=this.determinePrice.bind(this);
    this.combineElements=this.combineElements.bind(this);
    this.generateOptions=this.generateOptions.bind(this);
    this.setData=this.setData.bind(this);

  }

  handleChange=(text)=>{

    this.setState({ //Empty Options Arrays with New Entry
      Options:[],
      recursionOptions:[],
    })

    console.log("handleChange: "+text + "recursionOptions: " + JSON.stringify(this.state.recursionOptions)) ;

    this.setState({
      target:text
      },function(){    
      // this.generateOptionsByFactors(this.state.target);
      this.combineElements(this.state.series,this.state.target)
    })

    console.log("state update: " + this.state.target)
    
  }

  // returnPricePerPackage

  determinePrice=(series)=>{

    let total=0;

    series.map(value=>{

      if(value===400) total+=this.state.FourHundred;
      if(value===800) total+=this.state.EightHundred;
      if(value===1700) total+=this.state.OneThousandSevenHundred;

      console.log("determinePrice: value " + value + "total: " + total)

    })

    total=Math.ceil(total * 100) / 100;

    return total;
  }

  createOptionsObject=(multiplicator,multiplicand)=>{

    let uniqueID=uuid.v1();
    let options=multiplicator+' x '+multiplicand;
    let price=this.determinePrice(multiplicator,multiplicand);

    const optionsObject ={
      id: uniqueID,
      options: options,
      price: price,
    }

    this.setState({
      Options: [optionsObject]
    })

  }

  setData=(data)=>{

    let array=[{}];

    //ASync
    data.map(set=>{

      console.log("setData:Mapping... " + set);
      console.log(this.generateOptions(set));
      // array.push(this.generateOptions(set)); // places Objects returned from generateOptions into array

      this.setState(prevState=>({
        recursionOptions: [...prevState.recursionOptions,this.generateOptions(set)]
      }),function(){    
        console.log("this.state.recursionOptions: "+ this.state.recursionOptions)
      })

    })

  }

  generateOptions=(series)=>{

    let array=[];
    let list=[];

    console.log("generateOptions series: " + series);

    let uniqueID=uuid.v1();
    let optionsString="";
    let price=this.determinePrice(series)

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

    optionsString=this.returnRenderedOptions(array);


    const optionsObject ={
      id: uniqueID,
      options: optionsString,
      price: price,
    }

    console.log("optionsObject: " + optionsObject)



    return optionsObject

  }
  
  returnRenderedOptions=(options)=>{

    console.log("returnRenderedOptions: " + JSON.stringify(options))

    let label="";

    options.map((option)=>{
      label+="\n" + option.count + " of " +  option.value;
    })
    
    console.log(label);

    return label;

  }

  returnRenderItem=(item)=>{

    return <View>
    {
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title> {item.item.options} ${item.item.price} </ListItem.Title>
          </ListItem.Content>
        </ListItem>
    }
    </View>
  }

  combineElements=(arr,sum)=>{

    let output=[];
     console.log("Target" + this.state.target )

    function findCombination(remainder,path,entry){
      
      // console.log("Calling findCombination Path Values: " + path)
      
      if(remainder<0){
        console.log("Breaking Out of Loop: Negative Remainder " + remainder*-1 + " path: " + path)
        // Find the first ten options
        console.log("Surplus: " + remainder*-1 + "Path: " + path)
        output.push([...path]);
        return;
      }
  
      if(remainder === 0){
        // console.log("Breaking Out of Loop: 0 Remainder " + path)
        output.push([...path]);
        return;
      }
      
      // console.log("Continuing to Loop with Path Values: " + path)
      for(let i=entry; i < arr.length; i++){
        // console.log(" Entering 'Path' Values: " + path )
        findCombination(remainder-arr[i],[...path,arr[i]],i); // Is operating   a for loop; Repeats this Line Until Broken Out Of; 
        //2
        //2,2
        //2,2
        // console.log(" Exiting Path Values: " + path)
      }

    }

    findCombination(sum,[],0);
    console.log(output);

    this.setData(output);

    // output.map(set=>{
    //   this.setData(this.generateOptions(set));
    // })
 
    return output;
  }

  // fixOrder=()=>{

  // }

  // OptionsWithRemainders=()=>{
  
    
  // }



  componentDidUpdate=()=>{

    console.log("component updated. state: " + this.state.target)

  }

  render() {

    return (        
      
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

          <SearchBar
          placeholder="How Many Coins Do You Need?"
          onChangeText={this.handleChange}
          value={this.state.target}
          lightTheme="true"
          />

          <FlatList 
            data={this.state.recursionOptions} 
            keyExtractor={item => item.id} 
            renderItem={this.returnRenderItem}>
          </FlatList>

        </SafeAreaView>
      </SafeAreaProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // marginTop: '20%',
    backgroundColor: '#fff',
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    height:150,
    marginVertical: 8,
    marginHorizontal: 0,
    margin:'auto',
    textAlign:'center',
  },

  title: {
    fontSize: 32,
  },

  button:{
    width: '25%'
  },

  tab:{
    backgroundColor:'#fff',
  },

  divider: {
    backgroundColor:'blue',
    // height:1,
  }

});

export default Options;