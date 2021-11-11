import React from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

import BrowseItem from '../components/BrowseItem';

const BrowseHotels = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 10}}>
            <View onPress={e => {
                navigation.push("BrowseScreen")
            }} style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "blue"
            }}>
                <TextInput placeholder={"Search Destination"} style={{fontSize: 18, maxWidth: "85%"}}/>
                <Icon name={"search"} type={"ionicon"} size={25} color={"black"}/>
            </View>

            <Text style={{fontSize: 22, fontWeight: "bold", marginTop: 20}}>Browse Hotels</Text>


            <View style={{flex: 1,marginTop: 10}}>
                <ScrollView alwaysShowVerticalIndicator={false}>
                    <BrowseItem  navigation={navigation}/>
                    <BrowseItem  navigation={navigation} />
                    <BrowseItem  navigation={navigation} />
                </ScrollView>
            </View>

        </View>
    )
}

export default BrowseHotels;
