import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView, TabBarIOSItem } from 'react-native';
import Home from './Components/Home';
import SettingsStack from './Components/Settings/SettingsStack';
import Messages from './Components/Messages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Entypo';
import { deviceHeight } from './Components/Home';
export default function PostStack() {
  const Tab = createBottomTabNavigator();
  const bottomTabHeight = deviceHeight/15
  const iconSize = deviceHeight/25
  return (
    <Tab.Navigator initialRouteName='HomeScreen' 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2E5A88", 
          height:bottomTabHeight, 
          borderTopWidth: 0
        },
      }}>

      <Tab.Screen name="SettingsStack" component={SettingsStack} 
        options={({ navigation }) => ({ 
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: ({focused, tintColor}) => (
            <HomeIcon focused={focused} name ='cog' size={iconSize} color={{tintColor}}/>
          ),
          tabBarOptions: {
            activeTintColor: "silver",
            inactiveTintColor: "#404040"
          }
        })}/>

      <Tab.Screen name="HomeScreen" component={Home} 
        options={({ navigation }) => ({ 
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: ({tintColor}) => (
            <HomeIcon name ='documents' size={iconSize} color={'#F8F8FF'} />
          ),
          tabBarActiveTintColor: "silver",
          tabBarInactiveTintColor: "#404040"
        })}/>

      <Tab.Screen name="MessagesScreen" component={Messages} 
        options={({ navigation }) => ({ 
          headerTransparent: true,
          headerTitle: "",
          tabBarIcon: () => (
            <HomeIcon name ='message' size={iconSize} />
          )
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
});
  