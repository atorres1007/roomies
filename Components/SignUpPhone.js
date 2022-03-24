import { Text, View, SafeAreaView, 
    StyleSheet, TextInput, TouchableOpacity, 
    ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import PhoneInput from 'react-native-phone-number-input'
import Icon from 'react-native-vector-icons/AntDesign'

export default function SignUpPhone () {
    const [phone, setPhone] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:3}}></View>
            <ScrollView style={{flexGrow:1}}>
                <View >
                    <Text style={styles.topBarTitle}>LOGIN</Text>
                </View>  
                <View style={styles.inputContainer}>
                    <Text style={styles.emailLabel}>Phone Number:</Text>
                    <PhoneInput 
                    containerStyle = {{borderRadius: 10, alignSelf:"center"}}
                    textContainerStyle = {{borderRadius:10}}
                    defaultCode = 'US'
                    placeholder="123-456-7890"
                    placeholderTextColor="#1B3651"
                    onChangeText={newPhone => setPhone(newPhone)}
                    />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.continueButton}>
                    <View style={styles.buttonStyling}>
                        <Icon name="right" size={50} color="white"/>
                    </View>        
                </TouchableOpacity>
            </View>
            <View style={{flex:3}}></View>
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
      flex:1,
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