import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { NavigationContainer, CommonActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpHome from './signUpComponents/SignUpHome';
import SignUpEmail from './signUpComponents/SignUpEmail';
import SignUpPhone from './signUpComponents/SignUpPhone';
import SignInUserAndPass from './signUpComponents/SignInUserAndPass';
import PostStack from './PostStack';
  global.isLoggedIn = false
export default function PreStack() {
  const Stack = createNativeStackNavigator();
      /*const [mainScreen, setMainScreen] = useState("")
      if (isLoggedIn) {setMainScreen("HomePage")} 
      else {setMainScreen("SignUpHomePage")}*/
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUpHomePage">
            <Stack.Screen name="SignUpHomePage" component={SignUpHome} 
            options={({ navigation }) => ({ 
              headerTransparent: true,
              headerTitle: ""
            })}/>
            <Stack.Screen name="SignUpEmailPage" component={SignUpEmail} 
            options={({ navigation }) => ({ 
              headerBackTitleVisible: false,
              headerTransparent: true, 
              headerTitle: "",
              headerLeft: () => (
                <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.goBack()}>
                  <Icon name="left" size={30}/>
                </TouchableOpacity>
                )
            })}/>
            <Stack.Screen name="SignUpPhonePage" component={SignUpPhone} 
            options={({ navigation }) => ({ 
              headerBackTitleVisible: false,
              headerTransparent: true, 
              headerTitle: "",
              headerLeft: () => (
                <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.goBack()}>
                  <Icon name="left" size={30}/>
                </TouchableOpacity>
                )
            })}/>
            <Stack.Screen name="SignInUserAndPassPage" component={SignInUserAndPass} 
            options={({ navigation }) => ({ 
              headerBackTitleVisible: false,
              headerTransparent: true, 
              headerTitle: "",
              headerLeft: () => (
                <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.goBack()}>
                  <Icon name="left" size={30}/>
                </TouchableOpacity>
                )
            })}/>
            <Stack.Screen name="PostStackNavigator" 
            component={PostStack} 
            options={({ navigation }) => ({ 
              headerBackTitleVisible: false,
              headerStyle: {backgroundColor: "#2E5A88"}, 
              headerTitle: "ROOMIES",
              headerTitleStyle: {color: "white"},
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
  