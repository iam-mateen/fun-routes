import React from 'react';
import {View, Dimensions, Text, ImageBackground} from "react-native";
import {Icon} from "react-native-elements";

const {width} = Dimensions.get("window");

const SuggestionItem = ({item}) => {
    return (
        <ImageBackground
            source={{uri: "https://media.istockphoto.com/photos/thun-cityspace-with-alps-mountain-and-lake-in-switzerland-picture-id945092130?k=20&m=945092130&s=612x612&w=0&h=WvjFTWRmp_YFb2Relp20h7tYyLTtaEerBtdX9OFQWWs="}}
            style={{
                flex: 1,
                backgroundColor: "#fff",
                width: width - 20,
                height: 180,
                borderRadius: 10,
                overflow: "hidden",
                justifyContent: "space-between",
                paddingHorizontal: 20
            }}>
            <View style={{alignItems: "flex-end"}}>
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

            </View>


            <View style={{marginBottom: 10}}>
                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 20}}>Jargin Japones</Text>

                <View style={{flexDirection: "row",alignItems: "center"}}>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star"} color={"orange"} type={"ionicon"} size={15}/>
                    <Icon name={"star-outline"} color={"orange"} type={"ionicon"} size={15}/>
                    <Text style={{color: "#fff",marginLeft: 10}}>(25)</Text>
                </View>
            </View>


        </ImageBackground>
    )
}

export default SuggestionItem;
