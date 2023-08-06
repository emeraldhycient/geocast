import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";

import { View, Image } from "react-native";



const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  let { Navigator, Screen } = Tab;
  return (
    <Navigator
      activeColor={Colors.gold}
      inactiveColor={Colors.grayish}
      barStyle={{ backgroundColor: Colors.black }}
    >
      <Screen
        name="home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }: any) => (
            <Entypo name="home" color={color} size={20} />
          ),
        } as never}
      />
     
    </Navigator>
  );
}

export default BottomTab;
