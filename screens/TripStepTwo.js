import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Button, Icon} from "react-native-elements";

const TripStepTwo = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "space-between"}}>
            <View>
                <Text style={{fontSize: 23, color: "#4F4F4F", textAlign: "center", fontWeight: "bold"}}>Step 2 of
                    5</Text>

                <Text style={{fontSize: 20, color: "#3A3A3A", marginTop: 20, fontWeight: "bold"}}>Name your trip</Text>

                <TextInput style={{backgroundColor: "#EFF2F5", padding: 10, borderRadius: 10, marginTop: 10}}
                           placeholder={"Name your trip"}/>

            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button onPress={e => navigation.replace("TripStepOne")}
                        buttonStyle={{backgroundColor: "#3FA6E8", paddingHorizontal: 40}} raised={true} title={"Back"}
                        iconPosition={"left"}
                        icon={{type: "ionicon", name: "chevron-back", color: "#fff"}}/>


                <Button onPress={e => navigation.replace("TripStepThree")}
                        buttonStyle={{backgroundColor: "#3FA6E8", paddingHorizontal: 40}} raised={true} title={"Next"}
                        iconPosition={"right"}
                        icon={{type: "ionicon", name: "chevron-forward", color: "#fff"}}/>
            </View>

        </View>
    )
}

export default TripStepTwo;
