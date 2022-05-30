import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function SettingsHome() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#404040'}}>
            <View style={{flex: 0.6, alignSelf: "center", justifyContent: 'center'}}>
                <TouchableOpacity>
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
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Icon name="user" size={50} style={styles.icon}/>
                    </View>
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
        borderColor: "#2E5A88", 
        borderWidth: 3, 
        borderRadius: 50,
        justifyContent: "center",
        backgroundColor: '#404040'
    },
    icon: {
        alignSelf: "center",
        color: "silver"
    },
    profilePicture:{
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#2E5A88'
    }



})