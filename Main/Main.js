import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Options from '../Options/Options';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
class Main extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {
      target: '',
    };

    this.handleChange=this.handleChange.bind(this);
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
  
  }

  handleChange=(text)=>{

    this.setState({
      target:text
    })

    console.log("state update: " + this.state.target)
    
  }

  componentDidUpdate=()=>{

    console.log("component updated. state: " + this.state.target)

  }

  render() {

    return (

      <SafeAreaProvider>

        <SafeAreaView style={styles.container}>

          <View style={styles.container}>
          <StatusBar style="auto" />
{/* 
          <SearchBar
          placeholder="How Many Coins Do You Need?"
          onChangeText={this.handleChange}
          value={this.state.target}
          lightTheme="true"
          /> */}

          <Options target={this.state.target}/>

          </View>
        </SafeAreaView>

      </SafeAreaProvider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
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
    }
  
  });

  export default Main;