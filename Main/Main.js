import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Query from './Query';
import List from '../List/List';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import store from '../Store/store'
import { Provider } from 'react-redux'

class Main extends React.Component {
  
  constructor(props) {

    super(props);
    this.state = {};

  }

  render() {

    return (

      <Provider store={store}>

        <SafeAreaProvider>

          <SafeAreaView style={styles.container}>

            <View style={styles.container}>

              <StatusBar style="auto" />

              <Query/>

              {/* <List/> */}

            </View>

          </SafeAreaView>

        </SafeAreaProvider>   

      </Provider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      
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