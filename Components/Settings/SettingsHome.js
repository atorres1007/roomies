import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function SettingsHome() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex: 0.6, alignSelf: "center", justifyContent: 'center'}}>
                <Icon name="user" size={100} />
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
        borderColor: "black", 
        borderWidth: 2, 
        borderRadius: 50,
        justifyContent: "center",
    },
    icon: {
        alignSelf: "center"
    }


})