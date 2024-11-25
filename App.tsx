import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // 添加这行
import Toast from 'react-native-toast-message'
import Home from "./src/views/Home";
import History from "./src/views/History/History";
import Cash from "./src/views/Cash/Cash";
import Cards from "./src/views/Cards/Cards";
import Menu from "./src/views/Menu";
import Navigation from "./src/components/Navigation";
import AddCard from "./src/views/Cards/AddCard"; // 添加这行

const Tab = createBottomTabNavigator();
const CardStack = createNativeStackNavigator();

function CardStackScreen() {
  return (
    <CardStack.Navigator screenOptions={{ headerShown: false }}>
      <CardStack.Screen name="Cards" component={Cards} />
      <CardStack.Screen name="AddCard" component={AddCard} />
    </CardStack.Navigator>
  );
}

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
        <Tab.Screen name="Cards" component={CardStackScreen} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
