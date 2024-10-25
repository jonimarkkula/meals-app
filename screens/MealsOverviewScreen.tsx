import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationPages';
import { MEALS } from '../data/dummy-data';

import MealsList from '../components/MealList/MealsList';

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

  return <MealsList meals={displayedMeals} navigation={props.navigation} />;
}

export default MealsOverviewScreen;
