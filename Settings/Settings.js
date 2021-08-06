import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import configureSet from './Utils/CombinationGenerator';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux'
import { testStore } from '../Store/optionsSlice'

export function List(props) {
  
  const options = useSelector(state => state.test.value)
  
  const returnRenderItem=(item)=>{

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

    return (   

      <>    
        <FlatList 
          data={options} 
          keyExtractor={item => item.id} 
          renderItem={returnRenderItem}>
        </FlatList>
      </>

    );

  }

const mapStateToProps = (state) => {
  return { test: state.value };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    test: () => dispatch(testStore()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Options);

