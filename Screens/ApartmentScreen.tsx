import React from 'react'
import { View, Text } from 'react-native'
import BottomTab from '../components/BottomTab'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Project from './ApartmentSheet/Project'
import Company from './ApartmentSheet/Company'
import Branch from './ApartmentSheet/Branch'
import Model from './ApartmentSheet/Model';
import Unit from './ApartmentSheet/Unit';
import Total from './ApartmentSheet/Total';

const Tab = createMaterialTopTabNavigator();
export default function ApartmentScreen() {
    return (
        <Tab.Navigator 
        screenOptions={{
            

            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
                backgroundColor: '#F15C22',
                height: 2,
            },
            tabBarStyle: {
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                height: 60,
                shadowRadius: 10,
                elevation: 10,
            },
            tabBarActiveTintColor: '#F15C22',
            tabBarInactiveTintColor: '#000',
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' ,marginTop: 10},
        }}
        style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
        }}>
            <Tab.Screen name="Company" component={Company} />
            <Tab.Screen name ="Model" component={Model} />
            <Tab.Screen name="Branch" component={Branch} />
            <Tab.Screen name="Project" component={Project} />
            <Tab.Screen name="Unit" component={Unit} />
            <Tab.Screen name="Total" component={Total} />
        </Tab.Navigator>
    )
}
