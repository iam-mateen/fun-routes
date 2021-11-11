import React from 'react';
import {ScrollView, Text, TextInput, Dimensions, View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";
import HomeFilter from "../components/HomeFilter";
import TopAttractionItem from "../components/TopAttractionItem";
import TopHotelItem from "../components/TopHotelItem";
import SuggestionItem from "../components/SuggestionItem";

import Carousel from 'react-native-banner-carousel';


const {width, height} = Dimensions.get("window");

const filters = ["All", "Museums", "Historical Places", "Restaurants", "Shops", "Other"];


const suggestions = [1, 2, 3];

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff", padding: 10}}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity onPress={e => {
                    navigation.push("BrowseScreen")
                }} style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "blue"
                }}>
                    <TextInput editable={false} placeholder={"Search Destination"} style={{fontSize: 18, maxWidth: "85%"}}/>
                    <Icon name={"search"} type={"ionicon"} size={25} color={"black"}/>
                </TouchableOpacity>

                <View style={{marginTop: 20, flexDirection: "row"}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {filters.map((val, index) => <HomeFilter title={val} isSelected={index == 0 ? true : false}
                                                                 key={index}/>)}
                    </ScrollView>
                </View>


                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: 23, color: "black", fontWeight: "bold"}}>Top Attraction</Text>

                    <Text style={{color: "#66BCF3", fontWeight: "bold", fontSize: 16}}>See All</Text>
                </View>


                <View style={{flexDirection: "row", marginTop: 15}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TopAttractionItem/>
                        <TopAttractionItem/>
                        <TopAttractionItem/>
                    </ScrollView>
                </View>


                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: 23, color: "black", fontWeight: "bold"}}>Suggested for you</Text>

                    <Text style={{color: "#66BCF3", fontWeight: "bold", fontSize: 16}}>See All</Text>
                </View>


                <View style={{marginTop: 15}}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        showsPageIndicator={false}
                        index={0}
                        pageSize={width}
                    >

                        {suggestions && suggestions.map((item, index) => <SuggestionItem key={index} item={item}/>)}

                    </Carousel>
                </View>


                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{fontSize: 23, color: "black", fontWeight: "bold"}}>Suggested for you</Text>

                    <Text style={{color: "#66BCF3", fontWeight: "bold", fontSize: 16}}>See All</Text>
                </View>


                <View style={{flexDirection: "row", marginTop: 15}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TopHotelItem/>
                        <TopHotelItem/>
                        <TopHotelItem/>
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen;
