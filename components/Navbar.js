import {Icon} from "react-native-elements";
import {Image} from "react-native";
import React from "react";

export default {
    title: "",
    headerRight: () => <Icon name={"menu"} size={30} containerStyle={{marginRight: 10}} type={"ionicon"}/>,
    headerLeft: () => <Image
        source={{uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"}}
        style={{width: 40, height: 40, borderRadius: 50, marginLeft: 10}}/>
}
