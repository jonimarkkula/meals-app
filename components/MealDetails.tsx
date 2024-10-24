import { StyleSheet, Text, View } from 'react-native';
import Meal from '../models/meal';

interface MealDetailsProps {
  meal: Meal;
  containerStyle?: {};
}

function MealDetails(props: MealDetailsProps) {
  return (
    <View style={[styles.details, props.containerStyle]}>
      <Text style={styles.detailItem}>{props.meal.duration}m</Text>
      <Text style={styles.detailItem}>
        {props.meal.complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItem}>
        {props.meal.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8,
  },
  detailItem: {
    padding: 4,
    fontSize: 12,
  },
});
