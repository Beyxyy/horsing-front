import React from 'react';
import {Pressable, Text, View} from 'react-native';


export default function Button({label, onPress}) {
  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};