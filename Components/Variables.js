import { Dimensions } from "react-native";
import React from "react";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const swipeThreshold = 0.25 * deviceWidth;
const swipeOutDuration = 250
const roomieBlue = '#2E5A88'
const roomieWhite = '#F8F8FF'

export {deviceHeight, deviceWidth, roomieBlue, roomieWhite, swipeThreshold, swipeOutDuration}