import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../navigation/NavigationPages';
import { MEALS } from '../data/dummy-data';

import Meal from '../models/meal';
import MealItem from '../components/MealItem';

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverview'
>;

function MealsOverviewScreen(props: MealsOverviewScreenProps) {
  const category = props.route.params?.category;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(category.id);
  });

  useEffect(() => {
    props.navigation.setOptions({
      title: category.title,
    });
  }, [category, props.navigation]);

  function renderMeal(itemData: { item: Meal }) {
    function onMealSelect() {
      props.navigation.navigate('MealDetailScreen', {
        meal: itemData.item,
      });
    }

    return <MealItem meal={itemData.item} onPress={onMealSelect} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderMeal}
      ></FlatList>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
