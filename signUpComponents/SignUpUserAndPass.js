import { Text, View, SafeAreaView, 
    StyleSheet, TextInput, TouchableOpacity, 
    ScrollView } from 'react-native';
  import { useState, useEffect } from 'react';
  import Icon from 'react-native-vector-icons/AntDesign'
  import axios from 'axios'
  
  export default function SignUpUserAndPass(props) {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const emailErrorHandling = () => {
      if (email === "") 
        {setEmailError(true)}
      else 
        {setEmailError(false)}
      if (emailError) 
        {setEmailErrorMessage("Email cannot be blank")} 
      else
        {setEmailErrorMessage("")}
    }
    const usernameErrorHandling = () => {
      if (username === "") 
        {setUsernameError(true)}
      else 
        {setUsernameError(false)}
      if (usernameError) 
        {setUsernameErrorMessage("Username cannot be blank")}
      else
        {setUsernameErrorMessage("")}
    }
    const passwordErrorHandling = () => {
      if (password === "") 
        {setPasswordError(true)}
      else 
        {setPasswordError(false)}
      if (passwordError) 
        {setPasswordErrorMessage("Password cannot be blank")}
      else
        {setPasswordErrorMessage("")}
    }
  const createUser = () => {
    axios({
      method: 'post',
      url: "http://10.0.0.60:8000/users",
      data: {
        email: `${email}`,
        username: `${username}`,
        password: `${password}`
      }
    })
    .then(function(response){
      console.log(response.data)
    })
  }
  
      return (
        <SafeAreaView style={styles.container} >
          <View style={{flex:1}}></View>
          <Text>{props.parentEmail}</Text>
          <ScrollView style={{flexGrow:3}} scrollEnabled={false}>
            <View style={{flex:2}}>
              <Text style={styles.topBarTitle}>LOGIN</Text>
            </View>  
            <View style={styles.inputContainer}>
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
              <TextInput 
              style={styles.password}
              placeholder="username"
              placeholderTextColor="#1B3651"
              onChangeText={newUsername => setUsername(newUsername)}
              value = {username}
              />
              <Text style={styles.errorMessage}>{usernameErrorMessage}</Text>
              <TextInput
              style={styles.password}
              placeholder="password"
              placeholderTextColor="#1B3651"
              secureTextEntry={true}
              onChangeText={newPassword => setPassword(newPassword)}
              value = {password}
              />
              <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.continueButton} onPress={createUser}>
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
      height: "35%",
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