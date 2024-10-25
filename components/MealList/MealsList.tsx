import { FlatList, StyleSheet, Text, View } from 'react-native';
import Meal from '../../models/meal';
import MealItem from './MealItem';
import { NavigationProp } from '../util';

interface MealsListProps {
  navigation: NavigationProp;
  meals: Meal[];
}

function MealsList(props: MealsListProps) {
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
        data={props.meals}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderMeal}
      ></FlatList>
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
