
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faHomeAlt, faHomeUser, faInfo, faMoneyBill, faMoneyBill1, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import constants from './models/constants';
import HomeScreen from './Screens/HomeScreen';
import InfoScreen from './Screens/InfoScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let icon : IconProp = faHome;

            if (route.name === 'Home') {
              icon = focused
                ? faHomeUser
                : faHome;
            } else if (route.name === 'Info') {
              icon = focused ? faMoneyBillAlt : faMoneyBill;
            }

            // You can return any component that you like here!
            return <FontAwesomeIcon icon={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: constants.accentColor,
          tabBarInactiveTintColor: 'gray',
        })}
      >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;