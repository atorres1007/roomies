import { StyleSheet, Text, View, 
    TouchableOpacity, Dimensions, Image,
    ImageBackground, SafeAreaView,
    Animated} from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Octicons';
import { LinearGradient } from 'expo-linear-gradient';
import Swipe from './CardStack/Swipe.js';
import { deviceHeight, deviceWidth, roomieBlue, 
    roomieWhite } from './Variables.js';
import { cardData } from './CardStack/CardData.js';
import Cards from './Cards.js';
const ButtonContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
`
const Button = styled.TouchableOpacity`
    border-width: 3px;
    border-radius: 50;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
    background-color: ${roomieWhite};
`

export default function Home () {
    return(
        <View style={{flex: 1}}>
            <Cards/>
            <ButtonContainer style={{marginTop: hello}}>
                <Button onPress={()=> swipe('left')} title='Swipe Left!' style={{borderColor:'red'}}>
                    <Icon name="thumbsup" size={50} style={styles.thumbsDown}/>
                </Button>
                <Button onPress={()=>swipe('right')} title='Swipe Right!' style={{marginLeft:buttonSeperation, borderColor:roomieBlue}}>
                    <Icon name="thumbsup" size={50} style={styles.thumbsUp}/>                    
                </Button>
            </ButtonContainer>
        </View>
    );
}
const buttonSeperation = deviceWidth / 4
const hello = deviceHeight / 40
const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    card: {
        flex: 1,
        width: 300,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        paddingLeft: 5,
        paddingBottom: 15,
        fontSize: 20,
        color: 'black',
        width: '100%'
    },
    thumbsUp: {
        color: roomieBlue
    },
    thumbsDown: {
        transform: [{rotateY: '180deg'},{rotateX: '180deg'}],
        color:'red'
    }
});
export {deviceHeight, deviceWidth, roomieBlue, roomieWhite}