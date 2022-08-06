import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, StackActions } from '@react-navigation/native'

export default function Profile() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{display:'flex', flex:1}}>
            <TouchableOpacity style={{flex: 1}} onPress={() => navigation.goBack()}>
                <Icon name="left" size={50}/>
            </TouchableOpacity>
            <View></View>
            <Text>Profile</Text>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

})