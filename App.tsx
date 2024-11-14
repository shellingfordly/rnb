import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/views/Home";
import History from "./src/views/History";
import Cash from "./src/views/Cash";
import Profile from "./src/views/Profile";
import Menu from "./src/views/Menu";
import BottomNavigation from "./src/components/BottomNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => (
          <BottomNavigation
            activeTab={props.state.routes[props.state.index].name}
            onTabPress={(tab) => {
              const event = props.navigation.emit({
                type: "tabPress",
                target: props.state.routes.find((r) => r.name === tab)?.key,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) {
                props.navigation.navigate(tab);
              }
            }}
          />
        )}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Cash" component={Cash} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
