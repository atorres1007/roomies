import { View, Image, Text, StyleSheet, PanResponder, Animated } from 'react-native'
import Card from './Card';
import { deviceHeight, deviceWidth, swipeOutDuration, swipeThreshold } from '../Variables';
import React, {useRef} from 'react';

export default function Swipe (user) {
    const pan = useRef(new Animated.ValueXY()).current
    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: Animated.event(
              [
                null,
                { dx: pan.x, dy: pan.y}
              ], 
              {useNativeDriver:false}  
            ),
            onPanResponderRelease: (evt, gesture) => {
                if (gesture.dx > swipeThreshold) {
                    console.log('swipe right');
                } else if (gesture.dx < -swipeThreshold) {
                    console.log('swipe');
                } else {
                    resetPosition()
                }
            }
        })
    ).current

    const resetPosition = () => {
        Animated.spring(pan, {
            toValue: {x:0, y:0},
            useNativeDriver:false 
            
        }).start()
    }
    
    const getCardStyle = () => {
        const rotate = pan.x.interpolate({
            inputRange: [-deviceWidth * 1.5, 0, deviceWidth * 1.5],
            outputRange: ['-120deg', '0deg','120deg']
        })
        return {
            ...pan.getLayout(),
            transform: [{rotate}]
        }
    }
    return(   
        <Animated.View
            style={
                /*transform: [{ translateX: pan.x}, {translateY: pan.y}]*/
                getCardStyle()
            }
            key={user.cardID} 
            {...panResponder.panHandlers}
        >
            <Card />
        </Animated.View> 
        
    )
}
const styles = StyleSheet.create({
    swipeContainer: {
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    }
})