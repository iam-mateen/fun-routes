import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";

import PasswordInputText from 'react-native-hide-show-password-input';
import {Button, Icon} from "react-native-elements";
import {useDispatch} from "react-redux";
import {__login} from "../store/actions";

const LoginScreen = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingBottom: 10,
            justifyContent: "space-between"
        }}>

            <ScrollView>


                <Text style={{fontSize: 25, fontWeight: "bold"}}>Upload a</Text>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Profile Picture</Text>

                <View style={{marginTop: 20, alignItems: "center"}}>


                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 150,
                        height: 150,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: "#9E9797"
                    }}>

                        <Icon size={35} color={"#9E9797"} name={"camera-outline"} type={"ionicon"}/>

                        <Text style={{color: "#66BCF3",fontSize: 12}}>Upload Picture</Text>

                    </View>

                </View>

                <Button onPress={e => {
                    dispatch(__login());
                }} title={"Next"} buttonStyle={{backgroundColor: "#8E8999"}} containerStyle={{marginTop: 40}}/>

                <Text style={{textAlign: "right", color: "#66BCF3",marginTop: 10}}>Add later</Text>

            </ScrollView>
        </View>
    )
}

export default LoginScreen;
