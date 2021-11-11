import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import BrowseHotels from "../screens/BrowseHotels";
import {Image} from "react-native";
import {Icon} from "react-native-elements";
import TripsScreen from "../screens/TripsScreen";

import Navbar from "../components/Navbar";
import TripStepOne from "../screens/TripStepOne";
import TripStepTwo from "../screens/TripStepTwo";
import TripStepThree from "../screens/TripStepThree";
import TripStepFive from "../screens/TripStepFive";
import TripStepFour from "../screens/TripStepFour";

const Stack = createStackNavigator();
const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={Navbar} name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen options={Navbar} name="BrowseScreen" component={BrowseHotels}/>
            <Stack.Screen options={Navbar} name="TripsScreen" component={TripsScreen}/>
            <Stack.Screen options={Navbar} name="TripStepOne" component={TripStepOne}/>
            <Stack.Screen options={Navbar} name="TripStepTwo" component={TripStepTwo}/>
            <Stack.Screen options={Navbar} name="TripStepThree" component={TripStepThree}/>
            <Stack.Screen options={Navbar} name="TripStepFour" component={TripStepFour}/>
            <Stack.Screen options={Navbar} name="TripStepFive" component={TripStepFive}/>



        </Stack.Navigator>
    );
}

export default AuthRoutes;
