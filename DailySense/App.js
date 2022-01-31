import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from "./src/components/SplashScreen.js"

class App extends Component {
  render() {
    return (
      <SplashScreen></SplashScreen>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;