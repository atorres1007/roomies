import { StyleSheet, Text, View, ScrollView,
    TouchableOpacity, SafeAreaView, Image,
    useWindowDimensions,
    Dimensions} from 'react-native';
import { deviceHeight, deviceWidth, roomieBlue, roomieWhite } from './Home';

export default function Messages() {
    const data = [
        {name: 'dummy1', img: require("../assets/idiot.png")},
        {name: 'dummy2', img: require("../assets/icon.png")},
        {name:'dummy3', img:require("../assets/splash.png")}
    ]

    const displayMatches = data.map(i => { 
        return (
            <TouchableOpacity style={{paddingRight:deviceHeight/70}}>
                <Image key={i.name} source={i.img} style={styles.thumbnail}/>
                <Text style={styles.matchesNames}>{i.name}</Text>
            </TouchableOpacity>
        );
    })
    const displayMessages = data.map(i =>  {
        return (
            <TouchableOpacity style={styles.messageIndividual}>
                <Image key={i.name} source={i.img} style={styles.thumbnail}/>
                <View style={{position:'absolute', left: deviceWidth/4}}>
                    <Text style={styles.messagesNames}>{i.name}</Text>
                    <Text>Hello i am  the biggest dummy </Text>
                </View>

            </TouchableOpacity>
        );
    })
    return(
        <SafeAreaView style={{flex:1, backgroundColor:roomieWhite}}>
            <View style={{flex:3, backgroundColor: roomieWhite}}>
                <Text style={{marginLeft:5, fontSize:20, fontWeight: '500'}}>Matches</Text>
                <View style={styles.matchesContainer}>
                <ScrollView horizontal={true} style={{borderRadius:5}}>    
                    <View style={styles.matches}>{displayMatches}</View>
                </ScrollView>
                </View>
            </View>
            <View style={styles.messages}>
                <Text style={{fontSize:20, fontWeight:'500', marginLeft: 5}}>Messages</Text>
                <ScrollView>    
                    <View style={styles.messageContainer}>{displayMessages}</View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        alignItems: "center",
        justifyContent:'center',
        flex: 1,
        width: deviceWidth,
        backgroundColor: "white"
    },
    matchesContainer:{
        margin:5, 
        borderRadius:5, 
        backgroundColor: roomieWhite, 
        shadowOpacity: 0.5, 
        shadowColor: roomieBlue,
        shadowOffset: {height: 2}
    },
    matches: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: roomieWhite,
    },
    matchesNames: {
        alignSelf:'center',
        fontSize: deviceWidth/25,
        fontWeight: '500'
    },
    messages: {
        flex:15,
        backgroundColor: roomieWhite,
        marginTop: 25,
    },
    messagesNames: { 
        fontSize: deviceWidth/18,
        fontWeight:'600',
        paddingBottom: deviceHeight/40, 
        paddingTop: 5
    },
    messageContainer: {
        marginTop:3, 
        backgroundColor:roomieWhite
    },
    messageIndividual:{
        borderBottomWidth: 0, 
        borderRadius:5,
        paddingBottom: 3, 
        paddingTop:3, 
        margin:5, 
        backgroundColor: roomieWhite, 
        shadowOpacity:0.5,
        shadowColor: roomieBlue,
        shadowOffset: {height: 2}
    },
    thumbnail: {
        width: deviceWidth/5,
        height: deviceHeight/11,
        borderWidth:2,
        borderRadius: 50,
        borderColor: roomieBlue, 
        marginLeft: 5
    }
});