import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign'
  import { NavigationContainer } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import SignUpEmail from './RoomiesComponents/SignUpEmail';
  import SignUpPhone from './RoomiesComponents/SignUpPhone';
  
  function SignUpHomePage({ navigation }) {
    return (
      <SafeAreaView style={styles.background}>
        <View style={{flex:3}}></View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 30, alignSelf:'center', color: 'white', fontWeight: '700'}}>Roomies</Text>
        </View>
        <View style={{flex:4}}>
          <TouchableOpacity style={styles.continueButton}>
            <View style={styles.buttonContainer}>
              <Text style={styles.signInButton}>Sign In with Apple</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton}>
            <View style={styles.buttonContainer}>
              <Text style={styles.signInButton}>Sign In with Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton}>
            <View style={styles.buttonContainer}>
              <Text style={styles.signInButton}>Sign In with Apple</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} 
          onPress={() => navigation.navigate('SignUpEmailPage')}>
            <View style={styles.buttonContainer}>
              <Text style={styles.signInButton}>Sign In with Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} 
          onPress={() => navigation.navigate('SignUpPhonePage')}>
            <View style={styles.buttonContainer}>
              <Text style={styles.signInButton}>Sign In with Phone Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf:'center'}}>
            <Text style={{color:'white', fontSize: 18}}>Trouble?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}></View>
      </SafeAreaView>
  
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
  
  const Stack = createNativeStackNavigator();
  
  export default function App({navigation}) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUpHomePage" component={SignUpHomePage} 
          options={{
            headerTransparent: true,
            headerTitle: ""
          }}/>
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
  