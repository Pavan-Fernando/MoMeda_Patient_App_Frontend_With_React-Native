/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';


import Navigation from './src/navigation/index'
import Home from './src/screens/Home/Home';

const App = ()  => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <Home /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#221548',
  }
});

export default App;
