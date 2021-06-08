import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import Engine from './Engine'

export default function App() {

  return (
    <SafeAreaProvider>
      <Header
      backgroundColor='#fff'
      leftComponent={{ icon: 'menu', color: '#000000' }}
      centerComponent={{ text: 'Robux Calculator ', style: { color: '#000000' } }}
      rightComponent={{ icon: 'home', color: '#000000' }}
      />
        <Engine/>
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
