import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
export default function Info() {
    const navigation = useNavigation();
    return(
        <View style={{marginTop:0}}>
            <Text>Info</Text>
        </View>
    );
}
const styles = StyleSheet.create({

})