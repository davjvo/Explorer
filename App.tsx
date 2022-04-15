
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Apps/FinanceApp1/Screens/HomeScreen';
import InfoScreen from './Apps/FinanceApp1/Screens/InfoScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <InfoScreen></InfoScreen>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
