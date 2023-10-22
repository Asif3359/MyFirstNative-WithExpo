import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GreatIng = props =>{
  
  return(
    <View>
      <Text>My name is {props.name}</Text>
    </View>
  );
}

export default function App() {
  const [count , setCount]=useState(0);
  const handleClik=()=>{
    setCount(count+1);
  }
  return (
    <View style={styles.container}>
      <Text>Hello Native App </Text>
      <GreatIng name="asif"></GreatIng>
      {/* <StatusBar style="auto" /> */}
      <p>Count :{count}</p>
      <button onClick={()=>handleClik()} >click me</button>
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
