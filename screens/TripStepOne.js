import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Button, Icon} from "react-native-elements";

const TripStepOne = ({navigation}) => {
    const [startDate, setStartDate] = useState("Select Date");
    const [endDate, setEndDate] = useState("Select Date");

    const [openStart, setOpenStart] = useState(false)
    const [openEnd, setOpenEnd] = useState(false)

    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 20, justifyContent: "space-between"}}>
            <View>
                <Text style={{fontSize: 23, color: "#4F4F4F", textAlign: "center", fontWeight: "bold"}}>Step 1 of
                    5</Text>

                <Text style={{fontSize: 20, color: "#3A3A3A", marginTop: 20, fontWeight: "bold"}}>Select your trip
                    dates</Text>

                <Text style={{marginTop: 30, fontSize: 15, fontWeight: "bold", color: "#3A3A3A",}}>Start Date</Text>


                <TouchableOpacity onPress={e => setOpenStart(true)} style={{
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                    flexDirection: "row",
                    padding: 10,
                    backgroundColor: "#EFF2F5",
                    justifyContent: "space-between"
                }}>
                    <Text>{startDate}</Text>
                    <Icon name={"calendar"} type={"feather"} color={"#444444"}/>
                </TouchableOpacity>


                <Text style={{marginTop: 30, fontSize: 15, fontWeight: "bold", color: "#3A3A3A",}}>End Date</Text>


                <TouchableOpacity onPress={e => setOpenEnd(true)} style={{
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 10,
                    flexDirection: "row",
                    padding: 10,
                    backgroundColor: "#EFF2F5",
                    justifyContent: "space-between"
                }}>
                    <Text>{endDate}</Text>
                    <Icon name={"calendar"} type={"feather"} color={"#444444"}/>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: "flex-end"}}>
                <Button onPress={e => navigation.replace("TripStepTwo")} buttonStyle={{backgroundColor: "#3FA6E8",paddingHorizontal: 40}} raised={true} title={"Next"} iconPosition={"right"}
                        icon={{type: "ionicon", name: "chevron-forward", color: "#fff"}}/>
            </View>

        </View>
    )
}

export default TripStepOne;
