import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View} from "react-native";
import {Button, Icon} from "react-native-elements";

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const TripStepThree = ({navigation}) => {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "space-between"}}>
            <View>
                <Text style={{fontSize: 23, color: "#4F4F4F", textAlign: "center", fontWeight: "bold"}}>Step 4 of
                    5</Text>

                <Text style={{fontSize: 20, color: "#3A3A3A", marginTop: 20, fontWeight: "bold"}}>Select Destination
                    Point</Text>

                <View style={{width: "100%", height: 200,marginTop: 10}}>
                    <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={region} />
                </View>


            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button onPress={e => navigation.replace("TripStepThree")}
                        buttonStyle={{backgroundColor: "#3FA6E8", paddingHorizontal: 40}} raised={true} title={"Back"}
                        iconPosition={"left"}
                        icon={{type: "ionicon", name: "chevron-back", color: "#fff"}}/>


                <Button onPress={e => navigation.replace("TripStepFive")}
                        buttonStyle={{backgroundColor: "#3FA6E8", paddingHorizontal: 40}} raised={true} title={"Next"}
                        iconPosition={"right"}
                        icon={{type: "ionicon", name: "chevron-forward", color: "#fff"}}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default TripStepThree;
