
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Header</Text>
          </View>
          <View>
            <Text>Horizontal Scroll</Text>
          </View>
          <View>
            <Text>Today activity</Text>
          </View>
          <View>
            <Text>Footer Total</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
