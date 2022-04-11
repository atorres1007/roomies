import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import PreStack from './PreStack';
import PostStack from './PostStack';
export default function App() {
  global.isLoggedIn = false
  return (
    <SafeAreaView style={{height: "100%", backgroundColor: "#2E5A88"}}>
      <PreStack />
    </SafeAreaView>
  );
}