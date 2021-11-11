import React, {useState} from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";

import {Button, Icon} from "react-native-elements";
import {__register} from "../store/actions";
import {useDispatch} from "react-redux";

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        setLoading(true);
        try {
            await dispatch(__register(email, password));
        } catch (err) {
            alert(err.message);
        }
        setLoading(false);
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            paddingBottom: 10,
            justifyContent: "space-between"
        }}>

            <ScrollView showsVerticalScrollIndicator={false}>


                <Text style={{fontSize: 25, fontWeight: "bold"}}>Let's get you</Text>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Onboard!</Text>
                <Text style={{marginTop: 5, color: "black"}}>Organize your trips with Fun Routes</Text>

                <View style={{marginTop: 20,}}>
                    <TextInput value={email} onChangeText={e => setEmail(e)}
                               style={{borderWidth: 1, borderColor: "#0A9AD0", padding: 8, borderRadius: 5}}
                               placeholder={"Email"}/>

                    <TextInput value={fullName} onChangeText={e => setFullName(e)} style={{
                        borderWidth: 1,
                        borderColor: "#0A9AD0",
                        padding: 8,
                        marginTop: 15,
                        borderRadius: 5
                    }}
                               placeholder={"Full Name"}/>

                    <TextInput value={password} onChangeText={e => setPassword(e)}
                               style={{
                                   borderWidth: 1,
                                   borderColor: "#0A9AD0",
                                   padding: 8,
                                   borderRadius: 5,
                                   marginTop: 15
                               }}
                               placeholder={"Password"}/>

                    <Text style={{textAlign: "right", marginTop: 10, color: "#0A9AD0"}}>forgot password?</Text>


                </View>

                <Button loading={loading} onPress={register} title={"Signup"} buttonStyle={{backgroundColor: "#0A9AD0"}}
                        containerStyle={{marginTop: 20}}/>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 20
                }}>
                    <View style={{height: 1, backgroundColor: "black", flex: 1,}}/>
                    <Text style={{marginHorizontal: 10, fontWeight: "bold"}}>Or continue with</Text>
                    <View style={{height: 1, backgroundColor: "black", flex: 1,}}/>

                </View>


                <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                    <TouchableOpacity style={{
                        backgroundColor: "#0F7CBA",
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                        marginHorizontal: 5
                    }}>
                        <Icon name={"facebook"} size={20} color={"#fff"} containerStyle={{marginHorizontal: 10}}
                              type={"feather"}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: "#259ADD",
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                        marginHorizontal: 5
                    }}>
                        <Icon name={"logo-twitter"} size={20} color={"#fff"} containerStyle={{marginHorizontal: 10}}
                              type={"ionicon"}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: "#DE4D12",
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                        marginHorizontal: 5
                    }}>
                        <Icon name={"logo-google"} size={20} color={"#fff"} containerStyle={{marginHorizontal: 10}}
                              type={"ionicon"}/>
                    </TouchableOpacity>

                </View>


                <Text style={{textAlign: "center", marginTop: 20}}>Don't have an account? <Text
                    style={{color: "#0A9AD0"}}>Login</Text> </Text>
            </ScrollView>
        </View>
    )
}

export default LoginScreen;
