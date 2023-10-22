import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const GreatIng = props =>{

  return(
    <View>
      <Text>My name is {props.name}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Native App </Text>
      <GreatIng name="asif"></GreatIng>
      {/* <StatusBar style="auto" /> */}
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
