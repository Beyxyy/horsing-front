import React from "react";
import { View, Text } from "react-native";
import Button from "../Components/Button";


export default function DetailScreen({navigation}) {

    return (
        <View>
            <Text>En gros je teste</Text>
            <View>
                <Text>Test</Text>
            </View>
            <Button label="Test" onPress={()=>console.log('test')}/>
        </View>
    );

}