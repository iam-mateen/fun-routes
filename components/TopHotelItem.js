import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import {Icon} from "react-native-elements";

const TopHotelItem = () => {
    return (
        <ImageBackground source={{uri: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                         style={{margin: 10, width: 250, height: 200, justifyContent: "flex-end", padding: 10,borderRadius: 10, overflow: "hidden"}}>

            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 18}}>Holiday Inn</Text>


            <View style={{flexDirection: "row",alignItems: "center"}}>
                <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                <Icon name={"star-outline"} color={"orange"} type={"ionicon"} size={15}/>
                <Text style={{color: "#fff",marginLeft: 10}}>(25)</Text>
            </View>

        </ImageBackground>
    )
}

export default TopHotelItem;
