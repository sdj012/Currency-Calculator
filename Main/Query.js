import React, { useState, useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import configureSet from '../Utils/CombinationGenerator';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import dispatcher from './Dispatcher';
import { targetStore } from '../Store/targetSlice'
import { optionsStore } from '../Store/optionsSlice'
import { fetchOptions } from '../Store/optionsSlice';

export function Query(props) {
  
  const dispatch = useDispatch()
  
  const [target, setTarget] = useState(props.target);

  const handleChange=(text)=>{
    setTarget(text)
  }

  useEffect(() => {
    dispatcher(target)
  },[target])


    return (   

      <>    
      
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>

            <SearchBar
            placeholder="How Many Coins Do You Need?"
            onChangeText={handleChange}
            value={target}
            lightTheme="true"
            />

          </SafeAreaView>
        </SafeAreaProvider>
      </>

    );

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


export default Query;
