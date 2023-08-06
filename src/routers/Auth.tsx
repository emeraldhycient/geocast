import { createStackNavigator } from "@react-navigation/stack";
import GettingStarted from '../screens/onboarding/GettingStarted';


const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="GettingStarted">
      <Stack.Screen
        name="GettingStarted"
        component={GettingStarted}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}

export default AuthStack;
