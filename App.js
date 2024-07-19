import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from './Components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>En gros je teste</Text>
      <View>
        <Text>Test</Text>
        
      </View>
      <Button label="Test" onPress=''/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
