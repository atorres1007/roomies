import { StyleSheet, Text, View, 
  TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, StackActions } from '@react-navigation/native'


export default function SignUpHomePage() {
  const navigation = useNavigation();
  const goHome = () => {
    navigation.dispatch(
      StackActions.replace('PostStackNavigator')
    )
  }
  return (
    <SafeAreaView style={styles.background}>
      <View style={{flex:3}}></View>
      <View style={{flex: 3}}>
        <Text style={{fontSize: 30, alignSelf:'center', color: '#F8F8FF', fontWeight: '700'}}>Roomies</Text>
      </View>
      <View style={{flex:4}}>
        <TouchableOpacity style={styles.continueButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signInButton}>Sign Up with Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signInButton}>Sign Up with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signInButton}>Sign Up with Apple</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} 
        onPress={() => navigation.navigate('SignUpEmailPage')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signInButton}>Sign Up with Email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} 
        onPress={() => navigation.navigate('SignUpPhonePage')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.signInButton}>Sign Up with Phone Number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:'center'}} 
        onPress={goHome}>
          <Text style={{color:'#F8F8FF', fontSize: 18}}>Already Have An Account? Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1}}></View>
    </SafeAreaView>

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
      backgroundColor: '#F8F8FF', 
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
  