import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign'
  import { NavigationContainer } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import SignUpHome from './signUpComponents/SignUpHome';
  import SignUpEmail from './signUpComponents/SignUpEmail';
  import SignUpPhone from './signUpComponents/SignUpPhone';
  import SignUpUserAndPass from './signUpComponents/SignUpUserAndPass';
  import SignInUserAndPass from './signUpComponents/SignInUserAndPass';
    function SignUpHomePage() {
      return(
        <SignUpHome />
      );
    }
    function SignUpEmailPage() {
      return (
        <SignUpEmail />
      );
    }
    function SignUpPhonePage() {
      return (
        <SignUpPhone />
      );
    }
    function SignUpUserAndPassPage() {
      return (
        <SignUpUserAndPass />
      );
    }
    function SignInUserAndPassPage() {
      return (
        <SignInUserAndPass />
      );
    }
    
    const Stack = createNativeStackNavigator();
    
    export default function PreStack() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignUpHomePage'>
            <Stack.Screen name="SignUpHomePage" component={SignUpHomePage} 
            options={({ navigation }) => ({ 
              headerTransparent: true,
              headerTitle: ""
            })}/>
            <Stack.Screen name="SignUpEmailPage" component={SignUpEmailPage} 
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
            <Stack.Screen name="SignUpPhonePage" component={SignUpPhonePage} 
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
            <Stack.Screen name="SignUpUserAndPassPage" component={SignUpUserAndPassPage} 
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
            <Stack.Screen name="SignInUserAndPassPage" component={SignInUserAndPassPage} 
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
          </Stack.Navigator>
        </NavigationContainer>
      );
    } 