import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './src/screens/onboarding/gettingStarted';
import AuthStack from './src/routers/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({

});
