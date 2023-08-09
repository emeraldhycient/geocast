import { createStackNavigator } from "@react-navigation/stack";
import GettingStarted from "../screens/onboarding/gettingStarted";
import Login from "../screens/auth/login/Login";
import SignUp from "../screens/auth/signup/SignUp";
import SelectOnboarding from "../screens/auth/signup/selectOnboarding";
import Verification from "../screens/auth/signup/Verification";
import UserDetails from "../screens/auth/signup/UserDetails";
import ForgotPassword from "../screens/auth/login/ForgotPassword";


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
      <Stack.Screen
        name="SelectOnboarding"
        component={SelectOnboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerShown: false,
        }}
      />
     
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}

export default AuthStack;
