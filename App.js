import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import Main from './Main/Main';
import Main_B from './Main/Main_B';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfigureSettings from './Settings/configureSettings';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <SafeAreaProvider>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      {/* <Header
      backgroundColor='#fff'
      leftComponent={{ icon: 'menu', color: '#000000' }}
      centerComponent={{ text: 'Robux Calculator ', style: { color: '#000000' } }}
      rightComponent={{ icon: 'home', color: '#000000' }}
      /> */}

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main_B" component={ Main_B } options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={ ConfigureSettings } options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
        
      {/* <Main/> */}

    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // marginTop: '20%',
    // backgroundColor: '#30fcd4',
    backgroundColor: '#fff',
  },
});
