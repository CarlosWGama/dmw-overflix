import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/login';
import { IntroScreen } from '../screens/intro';
import { HomeScreen } from '../screens/home';
import { FavoriteScreen } from '../screens/favorite';
import { MaterialIcons } from '@expo/vector-icons';
import App from '../../App';
import { AppColors } from '../theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Aplicativo
export function AppNavigation() {
    return (<Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 15}, activeBackgroundColor:'lightgrey'}} >
        <Tab.Screen name="home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <MaterialIcons name="home" color={AppColors.Text} size={24} />    
        }} />
        <Tab.Screen name="favorite" component={FavoriteScreen} options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: () => <MaterialIcons name="favorite" color={AppColors.Primary} size={24} />    
        }} />
    </Tab.Navigator>);
}

//Principal
export function MainNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="intro">
                <Stack.Screen name="intro" component={IntroScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="app" component={AppNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}