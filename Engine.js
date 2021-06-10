import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
// import { Icon } from 'react-native-elements';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import uuid from 'react-native-uuid';

// const Item=({option})=> (
//   <View style={styles.item}>
//     <Text style={styles.title}>{option}</Text>
//   </View>
// )

const checkIfFactorOf400=(target)=>{
  console.log("checkIfFactorOf400");
  return 0;

  // return new Promise(function(resolve,reject){
  //   if(target % 400 == 0) resolve(true);
  //   else reject(false);
  // })

}

const checkIfFactorOf800=(target)=>{
  console.log("checkIfFactorOf800");

  // return new Promise(function(resolve,reject){
  //   if(target % 800 == 0) resolve(true);
  //   else reject(false);
  // })

}

const checkIfFactorOf1700=(target)=>{
  console.log("checkIfFactorOf1700");

  // return new Promise(function(resolve,reject){
  //   if(target % 1700 == 0) resolve(true);
  //   else reject(false);
  // })
}


class Engine extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {
      target: '',
      series:[400,800,1700],
      FourHundred: 6.49,
      EightHundred: 12.99,
      OneThousandSevenHundred:25.99,
      // Array of Key&Value Pairs
      Options:[],  
      recursionOptions:[],
    };

    this.handleChange=this.handleChange.bind(this);
    this.generateOptionsByFactors=this.generateOptionsByFactors.bind(this);
    // this.generateOptionsByUniqueSet=this.generateOptionsByUniqueSet.bind(this);
    // this.generateOptionsByRandomnMethod=this.generateOptionsByRandomnMethod.bind(this);
    // this.formOptions=this.formOptions.bind(this);
    this.returnRenderItem=this.returnRenderItem.bind(this);
    this.returnRenderedOptions=this.returnRenderedOptions.bind(this);
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
    this.createOptionsObject=this.createOptionsObject.bind(this);
    this.determinePrice=this.determinePrice.bind(this);
    this.combineElements=this.combineElements.bind(this);
    this.recursion_generateOptions=this.recursion_generateOptions.bind(this);
    this.setData=this.setData.bind(this);
    // this.findCombination=this.findCombination.bind(this);
    // this.checkIfFactorOf400=this.checkIfFactorOf400.bind(this);
    // this.checkIfFactorOf800=this.checkIfFactorOf800.bind(this);
    // this.checkIfFactorOf1700=this.checkIfFactorOf1700.bind(this);

  }

  handleChange=(text)=>{

    this.setState({ //Empty Options Arrays with New Entry
      Options:[],
      recursionOptions:[],
    })

    console.log(text);

    this.setState({
      target:text
      },function(){    
      // this.generateOptionsByFactors(this.state.target);
      this.combineElements(this.state.series,this.state.target)
    })

    console.log("state update: " + this.state.target)
    
  }

  // returnPricePerPackage

  recursion_determinePrice=(series)=>{

    let total=0;

    series.map(value=>{

      if(value===400) total+=this.state.FourHundred;
      if(value===800) total+=this.state.EightHundred;
      if(value===1700) total+=this.state.OneThousandSevenHundred;

      console.log("recursion_determinePrice: value " + value + "total: " + total)

    })

    return total;
  }

  determinePrice=(multiplicator,multiplicand)=>{

    if(multiplicand==400) return Math.ceil((multiplicator*6.49) * 100) / 100
    if(multiplicand==800) return multiplicator*12.99;
    if(multiplicand==1700) return multiplicator*25.99;

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

  // createOptionsObject=(combination)=>{

    //If Repeating Values Exist
    //Group Repeating Values
    
    //
  // }

  generateOptionsByFactors=(target)=>{ 

    // dividend / divisor = quotient
    // Can target(dividend) be divided by 400/800/1700 without leaving a remainder?
    // If so, the divisor of target, and the quotient, make up the option

      if(target % 400 == 0){

        let quotient=target/400; 
        this.createOptionsObject(quotient,400);
      }
      
      if(target % 800 == 0){
        let quotient=target/800; 
        this.createOptionsObject(quotient,800);
      }

      if(target % 1700 == 0){
        let quotient=target/1700;
        this.createOptionsObject(quotient,1700);
      }

  
      // new Promise (function(resolve,reject){
      //   checkIfFactorOf400(target)
      // }).then(function(result){
      //   checkIfFactorOf800(target);
      // }).then(function(result){
      //   checkIfFactorOf1700(target);
      // })

  }

  setData=(data)=>{

    let array=[{}];

    //ASync
    data.map(set=>{

      console.log("setData:Mapping... " + set);
      console.log(this.recursion_generateOptions(set));
      // array.push(this.recursion_generateOptions(set)); // places Objects returned from recursion_generateOptions into array

      this.setState(prevState=>({
        recursionOptions: [...prevState.recursionOptions,this.recursion_generateOptions(set)]
      }),function(){    
        console.log("this.state.recursionOptions: "+ this.state.recursionOptions)
      })

    })

    // this.setState(prevState=>({
    //   recursionOptions: [...prevState.recursionOptions,array]
    // }),function(){    
    //   console.log("this.state.recursionOptions: "+ this.state.recursionOptions)
    // })
    

  }

  recursion_generateOptions=(series)=>{

    let array=[];
    let list=[];

    console.log("recursion_generateOptions series: " + series);

    let uniqueID=uuid.v1();
    let optionsString="";
    let price=this.recursion_determinePrice(series)

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

    // this.setState({
    //   recursionOptions: [optionsObject],
    // })

  }
  

  generateOptionsByUniqueSet=(target)=>{
    // When the target(divident) is divided by 400/800/1700, does it leave a remainder of 400, or 800?
    // Is the remainder a multiple of 400?
    // If so, the divisor of the target, multiplied by the quotient, and the remainder(is a multiple of 400) and it's multiplicator creates an option
  }

  // generateOptionsByRandomnMethod=(target)=>{}
  // formOptions=()=>{}
  
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
    // return <View style={styles.item}>
    // {/* <Icon name='sc-telegram' type='evilicon' color='#517fa4'/> */}
    // <Text style={styles.title}>{item.item.options}</Text> 
    // <Text style={styles.title}>{item.item.price}</Text> 
    // {/* For Above Line: Check console.log(item)  */}
    // </View>

    return <View>
    {
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title> {item.item.options} ${item.item.price} </ListItem.Title>
            {/* <ListItem.Subtitle>{item.item.options}</ListItem.Subtitle> */}
          </ListItem.Content>
        </ListItem>
    }
    </View>
  }

  combineElements=(arr,sum)=>{

    let output=[];

    function findCombination(remainder,path,entry){
      
      // console.log("Calling findCombination Path Values: " + path)

      if(remainder<0){
        // console.log("Breaking Out of Loop: Negative Remainder " + path)
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
    //   this.setData(this.recursion_generateOptions(set));
    // })
 
    return output;
  }



  componentDidUpdate=()=>{

    console.log("component updated. state: " + this.state.target)
    // this.generateOptionsByFactors(this.state.target);
    // Call functions
    // this.generateOptionsByUniqueSet();
    // this.generateOptionsByRandomnMethod();
  }

  componentDidMount=()=>{
    //Test Function
    // let arr=[2,3,6,7]
    // let sum=7;
    // console.log(this.combineElements(arr,sum));
  }
  render() {

    return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            {/* Menu */}
            {/* <Tab indicatorStyle={styles.tab} variant="primary">
              <Tab.Item indicatorStyle={styles.tab}title="Options" />
              <Tab.Item indicatorStyle={styles.tab} title="Conversion" />
            </Tab> */}

            <View style={styles.container}>
            {/* <Text h4>Enter target </Text> */}
            {/* <Input onChangeText={this.handleChange} placeholder="target"></Input> */}
            {/* <Button buttonStyle={styles.button}title="Calculate"/> */}
            <StatusBar style="auto" />

            <SearchBar
              placeholder="How Many Coins Do You Need?"
              onChangeText={this.handleChange}
              value={this.state.target}
              lightTheme="true"
            />
          
            {/* <FlatList 
              data={this.state.Options} 
              keyExtractor={item => item.id} 
              renderItem={this.returnRenderItem}>
            </FlatList> */}

            <FlatList 
              data={this.state.recursionOptions} 
              keyExtractor={item => item.id} 
              renderItem={this.returnRenderItem}>
            </FlatList>
{/* 
            <View>
              {
                this.state.Options.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>${l.price}</ListItem.Title>
                      <ListItem.Subtitle>{l.options}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            </View> */}

            {/* List View */}
          </View>
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

export default Engine;