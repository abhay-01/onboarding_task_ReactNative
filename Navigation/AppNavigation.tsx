import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import SignupScreen from '../Screens/SignupScreen';
import ApartmentScreen from '../Screens/ApartmentScreen';
import BunglowScreen from '../Screens/BunglowScreen';
import { NavigationContainer } from '@react-navigation/native';
import { getItem } from '../utils/asyncStorage';


const Stack = createNativeStackNavigator();
export default function AppNavigation() {
    const [showOnboarding, setShowOnboarding] = React.useState(null);

    useEffect(() => {
        checkIfAlreadyLaunched();
    }, []);


    const checkIfAlreadyLaunched = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded === 'true') {
            setShowOnboarding(false);
        } else {
            setShowOnboarding(true);
        }
    }

    if (showOnboarding === null) {
        return null;
    }

    if (showOnboarding) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='OnboardingScreen'>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ApartmentScreen" component={ApartmentScreen} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="BunglowScreen" component={BunglowScreen} options={{
                    headerShown: false
                }} />


            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="ApartmentScreen" component={ApartmentScreen} options={{
                        headerShown: false
                    }} />

                    <Stack.Screen name="BunglowScreen" component={BunglowScreen} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>

            </NavigationContainer>
        )
    }

}
