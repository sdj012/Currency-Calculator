import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';

class Option extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      series:[],
      price:0,
    };
    
  }

  render() {

    return (   
    
    <View>
      {
        <ListItem bottomDivider>
          <ListItem.Content>
            {/* <ListItem.Title> {item.item.options} ${item.item.price} </ListItem.Title> */}
          </ListItem.Content>
        </ListItem>
      }
    </View>
      )
  }

}