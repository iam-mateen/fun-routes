import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

const BrowseItem = ({navigation}) => {
    return (
        <TouchableOpacity onPress={e => navigation.push("TripsScreen")} style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            elevation: 1,
            margin: 10,
            borderRadius: 10,
            overflow: "hidden"
        }}>
            <View style={{margin: 10, maxWidth: "50%"}}>
                <Text style={{fontSize: 18}}>Serena Hotel</Text>

                <Text style={{color: "#767676", marginTop: 5}}>Top moutain view with an amazing scenic views of
                    river. This is a sample description</Text>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 5}}>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star-outline"} color={"orange"} type={"ionicon"} size={15}/>
                </View>

                <Text>4.1 (25)</Text>

            </View>

            <Image
                style={{height: null, width: "50%"}}
                source={{uri: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}}/>

        </TouchableOpacity>
    )
}

export default BrowseItem;
