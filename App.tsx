import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './src/screens/onboarding/gettingStarted';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar style="auto" />
      <GettingStarted/>
    </View>
  );
}

const styles = StyleSheet.create({

});
