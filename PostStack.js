import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView, TabBarIOSItem } from 'react-native';
import Home from './Components/Home';
import SettingsStack from './Components/Settings/SettingsStack'
import Messages from './Components/Messages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 export default function PostStack() {
  const Tab = createBottomTabNavigator();
  return (
        <Tab.Navigator initialRouteName='HomeScreen' 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: "#2E5A88"},
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black"}}>
          <Tab.Screen name="SettingsStack" component={SettingsStack} 
          options={({ navigation }) => ({ 
            headerTransparent: true,
            headerTitle: "",
          })}/>
          <Tab.Screen name="HomeScreen" component={Home} 
          options={({ navigation }) => ({ 
            headerTransparent: true,
            headerTitle: "",
          })}/>
          <Tab.Screen name="MessagesScreen" component={Messages} 
          options={({ navigation }) => ({ 
            headerTransparent: true,
            headerTitle: "",
          })}/>
        </Tab.Navigator>
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
  