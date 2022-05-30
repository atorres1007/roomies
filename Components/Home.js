import { StyleSheet, Text, View, 
    TouchableOpacity, Dimensions,
    ImageBackground} from 'react-native';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import Icon from 'react-native-vector-icons/Octicons';
import { LinearGradient } from 'expo-linear-gradient';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const cardHeight = deviceHeight - (deviceHeight * 0.35);

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #404040;
`

const CardContainer = styled.View`
    margin-top: 20;
    width: 90%;
    max-width: ${deviceWidth};
    height: 90%;
    max-height: ${cardHeight}
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 500px; 
    height: ${cardHeight};
    shadow-color: black;
    shadow-opacity: 0.3;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`
const Name = styled.Text`
    font-size: 30px;
    font-weight: 500
`
const Age = styled.Text`
    font-size: 20px;
    font-weight: 400;
`
const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`
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
    background-color: silver;
`
const db = [
        {name: 'dummy', age: "24",
        img: require("../assets/idiot.png")},
        {name: 'dummy2', age: "31",
        img: require("../assets/icon.png")},
        {name: 'dummy3', age: "19",
        img: require("../assets/splash.png")}
]
const alreadyRemoved = []
let charactersState = db

export default function Home () {
    const [characters, setCharacters] = useState(db)
    const [lastDirection, setLastDirection] = useState()

    const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete + ' to the ' + direction)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
          const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
          const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
          alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
          childRefs[index].current.swipe(dir) // Swipe the card!
        }
      }
    return(
        <Container>
            <CardContainer>
                {characters.map((character, index) =>
                <TinderCard ref={childRefs[index]} key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name)} 
                    onCardLeftScreen={() => outOfFrame(character.name)}>
                    <Card>
                    <CardImage source={character.img}>
                        <LinearGradient style={styles.cardTitle} start={[0, 0]} end={[1,1]} colors={['rgba(46,90,136,1)', 'rgba(46,90,136,0.5)']}>
                            <Name>{character.name}</Name>
                            <Age>{character.age}</Age>
                        </LinearGradient>
                    </CardImage>
                    </Card>
                </TinderCard>)}
            </CardContainer>
                <ButtonContainer style={{marginTop: hello}}>
                    <Button onPress={()=> swipe('left')} title='Swipe Left!' style={{borderColor:'red'}}>
                        <Icon name="thumbsup" size={50} style={styles.thumbsDown}/>
                    </Button>
                    <Button onPress={()=>swipe('right')} title='Swipe Right!' style={{marginLeft:dummy, borderColor:'#2E5A88'}}>
                        <Icon name="thumbsup" size={50} style={styles.thumbsUp}/>
                    </Button>
                </ButtonContainer>
            {lastDirection ? <InfoText key={lastDirection}>You swiped {lastDirection}</InfoText>
            : <InfoText />}
        </Container>
    );
}
const dummy = deviceWidth / 4
const hello = deviceHeight / 40
const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
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
        color: '#2E5A88'
    },
    thumbsDown: {
        transform: [{rotateY: '180deg'},{rotateX: '180deg'}],
        color:'red'
    }
});
export {deviceHeight, deviceWidth}