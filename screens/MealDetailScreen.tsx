import { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/NavigationPages';
import { Text } from 'react-native';

type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetailScreen'
>;

function MealDetailScreen(props: MealDetailScreenProps) {
  const meal = props.route.params.meal;

  useEffect(() => {
    props.navigation.setOptions({
      title: meal.title,
    });
  }, [meal, props.navigation]);

  return <Text>{meal.title}</Text>;
}

export default MealDetailScreen;
