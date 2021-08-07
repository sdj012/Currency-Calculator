import React, { useState } from 'react';
import { connect, useStore } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab,Text,Button, SearchBar, Divider } from 'react-native-elements';
import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import uuid from 'react-native-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { testStore } from '../Store/optionsSlice';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { FormControl, FormLabel, FormHelperText, Input, InputLabel } from '@material-ui/core';
import CollapsibleForm from './CollapsibleForm';

export function ConfigureSettings(props) {
  

    return (   

      <>    

      <CollapsibleForm />

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      </>

    );

}

export default ConfigureSettings;

