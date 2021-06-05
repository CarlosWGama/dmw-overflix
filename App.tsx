import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IntroScreen } from './src/screens/intro';
import { LoginScreen } from './src/screens/login';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" style="light" />
      {/* <IntroScreen /> */}
      <LoginScreen />
    </View>
  );
}