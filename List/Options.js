import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab,Text,Input,Button, SearchBar, Divider } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import configureSet from './Utils/CombinationGenerator';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux'
import { testStore } from '../Store/testSlice'

export function Options(props) {
  
  const dispatch = useDispatch()
  const options = useSelector(state => state.test.value)
  
  const [target, setTarget] = useState(props.target);

  // Array of Key&Value Pairs
  // determine Price: returnPricePerPackage
  // setData: Calls generateOptions to Retrieve Options Object. Sets Retrieved Object To Current State.
  // generateOptions: Packages Array Of Numbers, Determines and Adds Price
  // generateSentence
  // configureSet -> determines set and passes Set to -> setData

  const handleChange=(text)=>{
    setTarget(text)
    dispatch(testStore(text))
    console.log("test state : " + options)
  }

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
      
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>

            <SearchBar
            placeholder="How Many Coins Do You Need?"
            onChangeText={handleChange}
            value={target}
            lightTheme="true"
            />

            {/* <FlatList 
              data={this.state.Options} 
              keyExtractor={item => item.id} 
              renderItem={this.returnRenderItem}>
            </FlatList> */}

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
