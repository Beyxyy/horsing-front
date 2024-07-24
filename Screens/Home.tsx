import { StyleSheet, View, Text } from "react-native";
import Button from "../Components/Button";


export default function HomeScreen({navigation}) {
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });