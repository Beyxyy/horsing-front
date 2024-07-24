import React from "react";
import { View, Text } from "react-native";
import Button from "../Components/Button";
import styles from "../assets/Style/globalStyle";

export default function LoginScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text>En gros je teste</Text>
            <View>
                <Text>Test</Text>
            </View>
            <Button label="Test" onPress={()=>console.log('test')}/>
        </View>
    );
}