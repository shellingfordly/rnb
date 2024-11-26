import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // 添加这行
import Toast from 'react-native-toast-message'
import Home from "./src/views/Home";
import Chart from "./src/views/Chart/Chart";
import Cash from "./src/views/Cash/Cash";
import Cards from "./src/views/Cards/Cards";
import Person from "./src/views/Person";
import Navigation from "./src/components/Navigation";
import AddCard from "./src/views/Cards/AddCard"; // 添加这行

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CardStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
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
        <Tab.Screen name="Chart" component={Chart} />
        <Tab.Screen name="Cash" component={Cash} />
        <Tab.Screen name="Cards" component={CardStackScreen} />
        <Tab.Screen name="Person" component={Person} />
      </Tab.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
