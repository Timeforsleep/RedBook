/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native';
import Welcome from "./src/modules/welcome/Welcome";
import Login from "./src/modules/login/Login";
import HomeTab from "./src/modules/home/HomeTab";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(): React.JSX.Element {

    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'white'}
            />
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName={'Welcome'}
                screenOptions={{
                    cardStyle: {elevation: 1,}
                }}
                >
                    <Stack.Screen name="Welcome" component={Welcome} options={{
                        //TODO
                        headerShown: false,
                    }}
                    />
                    <Stack.Screen name="Login" component={Login} options={{
                        //TODO
                        headerShown: false,
                    }}
                    />
                    <Stack.Screen name="HomeTab" component={HomeTab} options={{
                        //TODO
                        headerShown: false,
                    }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({});

export default App;
