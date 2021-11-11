import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileSetup from "../screens/ProfileSetup";
import WalkthroughOne from "../screens/WalkthroughOne";

const Stack = createStackNavigator();
const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerTitle: ""}} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{headerTitle: ""}} name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen options={{headerTitle: ""}} name="ProfileSetupScreen" component={ProfileSetup} />

        </Stack.Navigator>
    );
}

export default AuthRoutes;
