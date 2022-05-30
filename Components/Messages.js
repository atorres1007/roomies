import { StyleSheet, Text, View, ScrollView,
    TouchableOpacity, SafeAreaView, Image,
    useWindowDimensions,
    Dimensions} from 'react-native';
import { deviceHeight, deviceWidth } from './Home';

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
            <TouchableOpacity style={{borderTopWidth: 1, borderBottomWidth: 1, marginBottom:0.01}}>
                <Image key={i.name} source={i.img} style={styles.thumbnail}/>
                <View style={{position:'absolute', left: deviceWidth/4}}>
                    <Text style={styles.messagesNames}>{i.name}</Text>
                    <Text>Hello i am  the biggest dummy </Text>
                </View>

            </TouchableOpacity>
        );
    })
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.matches}>
                <Text>Matches</Text>
                <ScrollView horizontal={true}>    
                    <View style={{flexDirection: 'row'}}>{displayMatches}</View>
                </ScrollView>
            </View>
            <View style={styles.messages}>
                <ScrollView >
                    <Text style={{fontSize:20, fontWeight:'500'}}>messages</Text>
                    <View>{displayMessages}</View>
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
    matches:{
        flex:3,
        backgroundColor: 'silver'
    },
    matchesNames: {
        alignSelf:'center',
        fontSize: deviceWidth/25,
        fontWeight: '500'
    },
    messages: {
        flex:15,
        backgroundColor: "white",
        borderTopWidth: 3
    },
    messagesNames: { 
        fontSize: deviceWidth/18,
        fontWeight:'600',
        paddingBottom: deviceHeight/40
    },
    thumbnail: {
        width: deviceWidth/5,
        height: deviceHeight/11,
        borderWidth:2,
        borderRadius:50,
        borderColor: '#2E5A88'
    }
});