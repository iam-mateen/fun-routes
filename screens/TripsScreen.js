import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

const TripsScreen = ({navigation}) => {

    const [tripFilter, setTripFilter] = useState("upcoming");

    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 20,}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Your Trips</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <Button raised={true} onPress={e => setTripFilter("upcoming")} title={"Upcoming Trips"}
                        titleStyle={{color: tripFilter == "upcoming" ? "#fff" : "#B7B7B7"}}
                        buttonStyle={{backgroundColor: tripFilter == "upcoming" ? "#3FA6E8" : "#fff"}}
                        containerStyle={{width: "46%"}}/>

                <Button onPress={e => setTripFilter("past")} raised={true} title={"Past Trips"}
                        titleStyle={{color: tripFilter == "past" ? "#fff" : "#B7B7B7"}}
                        buttonStyle={{backgroundColor: tripFilter == "past" ? "#3FA6E8" : "#fff"}}
                        containerStyle={{width: "46%"}}/>
            </View>

            <View style={{marginVertical: 50}}>
                <Text style={{textAlign: "center", fontSize: 18}}>There are no {tripFilter} trips</Text>
                <Text style={{textAlign: "center", fontSize: 18}}>Plan your trip now</Text>
            </View>


            <Button onPress={e => navigation.push("TripStepOne")} raised={true} buttonStyle={{backgroundColor: "#3FA6E8"}} title={"Plan a new trip"}
                  iconPosition={"right"}  icon={{type: "ionicon", name: "chevron-forward", color: "#fff"}}/>
        </View>
    )
}

export default TripsScreen;
