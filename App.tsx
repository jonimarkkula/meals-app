import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {
  DrawerStackParamList,
  RootStackParamList,
} from './navigation/NavigationPages';
import { Colors } from './colors/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from './screens/FavoritesScreen';
import { Provider } from 'react-redux';
import { store } from './store/Store';

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

function DrawerNavigation() {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        sceneContainerStyle: {
          backgroundColor: Colors.AppBackgroundColor,
        },
        drawerContentStyle: {
          backgroundColor: Colors.AppBackgroundColor,
        },
        drawerInactiveTintColor: 'white',
      }}
    >
      <DrawerStack.Screen
        name="MealsCategoriesDrawer"
        component={CategoriesScreen}
        options={{
          title: 'All Meal Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <DrawerStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </DrawerStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <Provider store={store}>
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
              component={DrawerNavigation}
              options={{
                headerShown: false,
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
