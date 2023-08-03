import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Explorer } from "../screens/Explorer";
import { Reels } from "../screens/Reels";
import { StoreScreen } from "../screens/StoreScreen";
import { Profile } from "../screens/Profile";

import House from "../assets/house.svg";
import Search from "../assets/search.svg";
import Union from "../assets/union.svg";
import Store from "../assets/store.svg";
import Add from "../assets/add.svg";
import FotoNery from "../assets/fotoNery.png";
import CircleStoriesProfile from "../assets/circleStoriesProfile.svg";
import { Image } from "react-native";
import { createNavigatorFactory } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Tab2 = createNavigatorFactory;

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <House />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Search />,
        }}
        name="Search"
        component={Explorer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Add />,
        }}
        name="Add"
        component={StoreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Union />,
        }}
        name="Reels"
        component={Reels}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 50 }}
              source={FotoNery}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
