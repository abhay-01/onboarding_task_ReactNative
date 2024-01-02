import React from 'react'
import { View, Text } from 'react-native'
import BottomTab from '../components/BottomTab'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Project from './ApartmentSheet/Project'
import Company from './ApartmentSheet/Company'
import Branch from './ApartmentSheet/Branch'

const Tab = createMaterialTopTabNavigator();
export default function ApartmentScreen() {
    return (
        <Tab.Navigator style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
        }}>
            <Tab.Screen name="Project" component={Project} />
            <Tab.Screen name="Company" component={Company} />
            <Tab.Screen name="Branch" component={Branch} />
        </Tab.Navigator>

    )
}
