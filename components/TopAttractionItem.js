import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import {Icon} from "react-native-elements";

const TopAttractionItem = () => {
    return (
        <View style={{borderRadius: 10, overflow: "hidden", backgroundColor: "#fff", elevation: 2, margin: 5}}>
            <ImageBackground
                source={{uri: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    width: 250,
                    height: 100,
                    alignItems: "flex-end"
                }}>

                <View style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#fff",
                    elevation: 1,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10
                }}>

                    <Icon name={"heart-outline"} type={"ionicon"}/>

                </View>

            </ImageBackground>

            <View style={{margin: 10}}>
                <Text style={{color: "black", fontWeight: "bold", fontSize: 18}}>Margala Hills</Text>

                <View style={{flexDirection: "row", marginTop: 10, alignItems: "center"}}>
                    <Icon name={"location"} size={18} type={"ionicon"}/>
                    <Text style={{marginLeft: 5}}>Pakistan</Text>
                </View>
            </View>


        </View>
    )
}

export default TopAttractionItem
