import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './navigation/NavigationPages';

const ScreenStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <ScreenStack.Navigator>
          <ScreenStack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <ScreenStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
