import React from 'react';
import connect from 'react-redux';
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
    };

    this.returnRenderItem=this.returnRenderItem.bind(this);
    this.generateSentence=this.generateSentence.bind(this);
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
    this.determinePrice=this.determinePrice.bind(this);
    this.configureSet=this.configureSet.bind(this);
    this.generateOptions=this.generateOptions.bind(this);
    this.setData=this.setData.bind(this);

  }

  handleChange=(text)=>{

    this.setState({ //Empty Options Arrays with New Entry
      Options:[],
    })

    console.log("handleChange: "+text + "Options: " + JSON.stringify(this.state.Options)) ;

    this.setState({
      target:text
      },function(){
      this.configureSet(this.state.series,this.state.target)
    })

    console.log("state update: " + this.state.target)
    
  }

  // determine Price: returnPricePerPackage
  // setData: Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.
  // generateOptions: Packages Array Of Numbers, Determines and Adds Price
  // generateSentence
  // configureSet -> determines set and passes Set to -> setData

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
            data={this.state.Options} 
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