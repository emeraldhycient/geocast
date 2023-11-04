import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './src/screens/onboarding/gettingStarted';
import AuthStack from './src/routers/Auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import useAuthenticationState from './src/states/zustandStore/authentication';
import MainStack from './src/routers/main';

export default function App() {
  const isAuthenticated = useAuthenticationState((state) => state.authentication.isAuthenticated);

  const [islogged, setIslogged] = useState(false)


  useEffect(() => {
    if (isAuthenticated) {
      setIslogged(true)
    } else {
      setIslogged(false)
    }
  }, [isAuthenticated])

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "none",
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <PaperProvider theme={theme}>
          {
            !islogged ?
              <AuthStack />
              :
              <MainStack />
          }
        </PaperProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({

});
