import { Text, View, SafeAreaView, 
  StyleSheet, TextInput, TouchableOpacity, 
  ScrollView } from 'react-native';
import { useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import SignUpUserAndPass from './SignUpUserAndPass';
import SignInUserAndPass from './SignInUserAndPass';

export default function SignUpEmail() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container} >
        <View style={{flex:3}}></View>
        <ScrollView style={{flexGrow:3}} scrollEnabled={false}>
          <View style={{flex:2}}>
            <Text style={styles.topBarTitle}>LOGIN</Text>
          </View>  
          <View style={styles.inputContainer}>
          <Text style={styles.emailLabel}>Email Address:</Text>
            <TextInput 
            style={styles.email}
            placeholder="johndoe@email.com"
            placeholderTextColor="#1B3651"
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(newEmail) => setEmail(newEmail)}
            value = {email}
            />
            <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} 
          onPress={() => navigation.navigate('SignUpUserAndPassPage')}>
              <View style={styles.buttonStyling}>
                <Icon name="right" size={50} color="white"/>
              </View>        
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}></View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E5A88",
    flex:1
  },
  topBarTitle: {
    fontSize: 30, 
    alignSelf:'center', 
    color: 'white', 
    fontWeight: '700',
    marginBottom:"20%"
  }, 
  inputContainer: {
    flex:3,
    width: "90%",
    alignSelf: "center",
    borderRadius:10,
    marginBottom: "10%"
  },
  emailLabel: {
    fontSize:30,
    fontWeight:"500",
    marginTop: "10%",
    marginBottom: "5%",
    color: "white", 
  },
  email: {
    backgroundColor: "white",
    color: "#1B3651",
    width: "90%",
    alignSelf: "center",
    height: "40%",
    fontSize: 30, 
    borderRadius: 5
  },
  errorMessage: {
    marginLeft: "5%",
    color: "red",
    marginBottom:0
  }, 
  password: {
    backgroundColor: "white",
    color: "#1B3651",
    width: "90%",
    alignSelf: "center",
    height: "35%",
    fontSize: 30, 
    borderRadius: 5,
    marginTop:"5%"
  },
  buttonContainer: {
    flex:1,
    flexDirection: "row-reverse",
  }, 
  continueButton: {
    marginRight: "5%"
  },
  buttonStyling: {
    borderWidth: 0, 
    backgroundColor: 'black', 
    borderRadius: 5,
  }
});