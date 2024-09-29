import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { RootStackParamList } from './navigation/NavigationPages';
import { Colors } from './colors/Colors';

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
        <ScreenStack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.AppBackgroundColor,
            },
          }}
        >
          <ScreenStack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Meal Categories',
            }}
          />
          <ScreenStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <ScreenStack.Screen
            name="MealDetailScreen"
            component={MealDetailScreen}
          />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
