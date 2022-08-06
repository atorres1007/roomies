import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { roomieBlue, roomieWhite, deviceWidth } from '../Home';

export default function SettingsHome() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1, backgroundColor: roomieWhite}}>
            <View style={{flex: 0.6, alignSelf: "center", justifyContent: 'center',}}>
                <TouchableOpacity style={styles.profilePictureOutline}>
                    <Image style={styles.profilePicture} source={require("../../assets/idiot.png")}/>
                </TouchableOpacity>
                <View style={{alignSelf: 'center'}}>
                    <Text style={{fontSize: 20,fontWeight: "500"}}>NAME</Text>
                </View>
                
            </View>
            <SafeAreaView style={{flexDirection: "row", alignSelf:"center"}}>
                <TouchableOpacity onPress={() => navigation.navigate("InfoScreen")}>
                    <View style={styles.iconContainer}>
                        <Icon name="setting" size={50} style={styles.icon}/>
                    </View>
                    <Text style={{alignSelf: "center"}}>SETTINGS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <View style={styles.iconContainer}>
                        <Icon name="user" size={50} style={styles.icon}/>
                    </View>
                    <Text style={{alignSelf: "center"}}>PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Icon name="edit" size={50} style={styles.icon}/>    
                    </View>
                    <Text style={{alignSelf: "center"}}>INFO</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    iconContainer:{
        width: 100, 
        height:100, 
        margin: deviceWidth/30,
        borderColor: roomieBlue, 
        borderWidth: 3, 
        borderRadius: 50,
        justifyContent: "center",
        backgroundColor: 'white',
        shadowOpacity: 0.75,
        shadowOffset: {height:3}, 
        shadowColor: roomieBlue,
    },
    icon: {
        alignSelf: "center",
        color: "black"
    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 5,
        borderColor: roomieBlue,
    },
    profilePictureOutline: {
        backgroundColor: roomieWhite, 
        shadowOpacity:1,
        shadowColor: roomieBlue,
        shadowOffset: {width:0,height: 3}, 
        borderRadius: 100, 

    }



})