import { View, Image, Text, StyleSheet } from 'react-native'
import { deviceHeight, deviceWidth } from '../Variables';
import { cardData } from './CardData';

export default function Card () {
    return(
        <View>   
        {cardData.map((user) => (
            <View key ={user.cardID}style={styles.swipeContainer}>     
                <Image style={{ width: '100%', height: 200 }} source={user.img}/>
            </View>
        ))}
        </View> 
    )
}
const styles = StyleSheet.create({
    swipeContainer: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    }
})