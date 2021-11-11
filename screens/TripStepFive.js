import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Button, Icon} from "react-native-elements";

const TripStepFive = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "space-between"}}>
            <View>
                <Text style={{fontSize: 23, color: "#4F4F4F", textAlign: "center", fontWeight: "bold"}}>Step 5 of
                    5</Text>

                <Text style={{fontSize: 20, color: "#3A3A3A", marginTop: 20, fontWeight: "bold"}}>Confirm Booking</Text>



            </View>

          <Button onPress={e => navigation.goBack()} title={"Confirm Booking"}/>

        </View>
    )
}

export default TripStepFive;
