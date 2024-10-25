import { DrawerScreenProps } from '@react-navigation/drawer';
import MealsList from '../components/MealList/MealsList';
import { DrawerStackParamList } from '../navigation/NavigationPages';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';

type FavoritesScreenProps = DrawerScreenProps<
  DrawerStackParamList,
  'Favorites'
>;

function FavoritesScreen(props: FavoritesScreenProps) {
  const favoriteMealIds = useSelector((state: RootState) => {
    return state.favoriteMeals.ids;
  });

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMealIds.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.noFavoritesText}>
          You have no favorites meals yet
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MealsList meals={favoriteMeals} navigation={props.navigation} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
