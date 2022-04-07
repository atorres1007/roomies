import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import PreStack from './PreStack';
import PostStack from './PostStack';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <SafeAreaView style={{height: "100%", backgroundColor: "#2E5A88"}}>
      {isLoggedIn ? (<PostStack />) : (<PreStack />)}
    </SafeAreaView>
    
  );
}