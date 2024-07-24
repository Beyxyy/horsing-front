import { StyleSheet, View, Text } from "react-native";
import Button from "../Components/Button";
import { useContext } from "react";
import { setGlobalContext} from "../Hooks/GlobalContext";
import LoginScreen from "./Login";


export default function HomeScreen({navigation}) {

  // const user = useContext(setGlobalContext.datas);
  return (
    <View style={styles.container}>
      <Text>En gros je teste</Text>
      <Button label="Test" onPress={() => navigation.push("Details")}/>
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