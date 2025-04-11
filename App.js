import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
export default function App() {
  const [userNumber, setUserNumber] = useState()
  function sentNumberHandler(sentNumber) {
    setUserNumber(sentNumber);
  }
  let screen = <GameStartScreen onSendNumber={sentNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen />
    )
   }
  
  return (
    <View style={styles.main}>

      {screen}
    </View>

  );
}
const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
})



