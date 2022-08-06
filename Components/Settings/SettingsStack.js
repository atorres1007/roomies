import { StyleSheet, Text, View, 
    TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Info from './Info';
import Options from './Options';
import Profile from './Profile';
import SettingsHome from './SettingsHome';

export default function SettingsStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='SettingsHomeScreen'>
            <Stack.Screen name='SettingsHomeScreen' component={SettingsHome}
            options={({ navigation }) => ({ 
                headerTransparent: true,
                headerTitle: ""
            })}/>
            <Stack.Screen name='InfoScreen' component={Info} 
                        options={({ navigation }) => ({ 
                            headerBackTitleVisible: false,
                            headerTransparent: true, 
                            headerTitle: "",
                            headerShown:false,
                            headerLeft: () => (
                                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.goBack()}>
                                  <Icon name="left" size={30}/>
                                </TouchableOpacity>
                                )
                          })}/>
           <Stack.Screen name='ProfileScreen' component={Profile} 
            options={({ navigation }) => ({ 
                headerBackTitleVisible: false,
                headerTransparent: true, 
                headerTitle: "",
                headerBackVisible:false,
              })}/>
            <Stack.Screen name='OptionsScreen' component={Options} 
            options={({ navigation }) => ({ 
                headerBackTitleVisible: false,
                headerTransparent: true, 
                headerTitle: "",
                headerLeft: () => (
                  <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.goBack()}>
                    <Icon name="left" size={50}/>
                  </TouchableOpacity>
                  )
              })}/>
        </Stack.Navigator>
    );
}