import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';

  function HomePage() {
    return(
      <Home />
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  export default function PostStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name="HomePage" component={HomePage} 
          options={({ navigation }) => ({ 
            headerTransparent: true,
            headerTitle: ""
          })}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } 
  
  const styles = StyleSheet.create({
    background: {
      flex:1, 
      backgroundColor: "#2E5A88",
    },
    continueButton: {
      height: '15%',
      width: '90%',
      borderWidth: 2,
      justifyContent:'center',
      backgroundColor: 'white', 
      borderRadius: 20,
      alignSelf: "center",
      marginBottom: "1%"
    },
    signInButton: {
      color:"#1B3651",
      fontSize: 20,
      alignSelf:'center',
    },
    buttonContainer: {
  
    }
  });
  