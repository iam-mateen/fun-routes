import React, {useState} from 'react';
import {Text, TouchableOpacity} from "react-native";

const HomeFilter = ({title,isSelected}) => {
    const [selected, setSelected] = useState(isSelected);
    return (
        <TouchableOpacity style={{marginHorizontal: 5,backgroundColor: selected ? "#D5E5E2" : "#fff",paddingHorizontal: 20,paddingVertical: 5, borderRadius: 50, justifyContent: "center", alignItems: "center"}}>
            <Text style={{color: selected ? "#5B7D76": "#666462"}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default HomeFilter;
