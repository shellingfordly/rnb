import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/views/Home";
import History from "./src/views/History/History";
import Cash from "./src/views/Cash/Cash";
import Cards from "./src/views/Cards/Cards";
import Menu from "./src/views/Menu";
import Navigation from "./src/components/Navigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => (
          <Navigation
            activeTab={props.state.routes[props.state.index].name}
            onTabPress={(tab) => {
              props.navigation.navigate(tab);
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
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
