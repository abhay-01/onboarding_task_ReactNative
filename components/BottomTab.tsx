import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

export default function BottomTab() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex flex-1">
            <View className="flex flex-1 items-center justify-center flex-row" >
                <View className="w-[100%] h-[70] bg-[#fff] flex-row mt-[auto]">
                    <TouchableOpacity className="w-[33%] h-[100%] justify-center items-center"
                        onPress={() => navigation.navigate("HomeScreen")}>
                        <Image source={require('../assets/home.png')}
                            className="w-[30] h-[40]" />
                        <Text>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-[33%] h-[100%] justify-center items-center"
                        onPress={() => navigation.navigate("ApartmentScreen")}>
                        <Image source={require('../assets/build.png')}
                            className="w-[30] h-[40]" />
                        <Text>Apartment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-[33%] h-[100%] justify-center items-center"
                        onPress={() => navigation.navigate("BunglowScreen")}>
                        <Image source={require('../assets/bungalow.png')}
                            className="w-[30] h-[35]" />
                        <Text>Bungalow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
