import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z, ZodError } from 'zod';
import { useNavigation } from '@react-navigation/native';

const signUpSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(6),
});


const SignUpScreen = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [formErrors, setFormErrors] = useState<ZodError | null>(null);

    const navigation = useNavigation();
    const handleSignUp = () => {
        try {
            signUpSchema.parse(formData);
            setFormErrors(null);
            console.log('Success');
            navigation.navigate('HomeScreen');
        } catch (error) {
            if (error instanceof ZodError) {
                setFormErrors(error);
            }
        }
    }



    return (
        <SafeAreaView className="flex flex-1 bg-[#E8F7E3] p-[20] justify-center">

            <View className="flex items-center justify-center m-4">
                <Text className="text-3xl font-bold">
                    Sign Up Screen
                </Text>
            </View>
            <TextInput
                className="border border-gray-400 rounded-2xl p-2 mb-4"
                placeholder="Username"
                onChangeText={(text) => setFormData({ ...formData, username: text })}
            />
            <TextInput
                className="border border-gray-400 rounded-2xl p-2 mb-4"
                placeholder="Email"
                onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <TextInput
                className="border rounded-2xl border-gray-400 p-2 mb-4"
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setFormData({ ...formData, password: text })}
            />

            {formErrors && (
                <Text className="text-[#ff0000] mb-[10]">
                    {formErrors.errors.map((error) => error.message).join('\n')}
                </Text>
            )}

            <TouchableOpacity className="bg-[#64B678] p-[10] flex items-center border border-radius-5 rounded-full bg-green-500" onPress={handleSignUp}>
                <Text className="text-[#fff] text-lg">Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SignUpScreen;
