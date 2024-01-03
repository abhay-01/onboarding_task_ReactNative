import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';


const { width, height } = Dimensions.get('screen');
export default function OnboardingScreen() {

    const navigation = useNavigation();

    const handleSkip = () => {
        navigation.navigate('SignupScreen');
        setItem('onboarded', 'true');
    }

    const handleDone = () => {
        navigation.navigate('SignupScreen');
        setItem('onboarded', 'true');
    }

    const doneButton = ({ ...props }) => {

        return (
            <TouchableOpacity {...props}
                className="bg-[#E8F7E3] p-[14] rounded-t-xl rounded-b-xl"
            >
                <Text className="text-base font-bold">
                    Done
                </Text>
            </TouchableOpacity>
        )
    }

    const nextButton = ({ ...props }) => {

        return (
            <TouchableOpacity {...props}
                className="p-[14] rounded-t-xl rounded-b-xl"
            >
                <Text className="text-base font-bold">
                    Next
                </Text>
            </TouchableOpacity>
        )
    }

    const skipButton = ({ ...props }) => {

        return (
            <TouchableOpacity {...props}
                className=" p-[14] rounded-t-xl rounded-b-xl"
            >
                <Text className="text-base font-bold">
                    Skip
                </Text>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView className="flex flex-1 bg-[#E8F7E3]">
            <Onboarding
                containerStyles={{
                    paddingHorizontal: 15
                }}

                onSkip={() => handleSkip()}
                onDone={() => handleDone()}
                DoneButtonComponent={doneButton}
                NextButtonComponent={nextButton}
                SkipButtonComponent={skipButton}


                pages={[
                    {
                        backgroundColor: '#DFF7E3',
                        image: (
                            <View style = {{
                                height:width,
                                width:width*0.9
                            }}>
                                <LottieView style = {{flex:1}} source={require('../assets/animations/Animation - 1704180260001.json')} autoPlay loop/>
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#C8E6C9',
                        image: (
                            <View style = {{
                                height:width,
                                width:width*0.9
                            }}>
                                <LottieView style = {{flex:1}} source={require('../assets/animations/building.json')} autoPlay loop/>
                            </View>
                        ),
                        title: 'Hello',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#A5D6A7',
                        image: (
                            <View style = {{
                                height:width,
                                width:width*0.9
                            }}>
                                <LottieView style = {{flex:1}} source={require('../assets/animations/Animation - 1704180260001.json')} autoPlay loop/>
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </SafeAreaView>
    )
}