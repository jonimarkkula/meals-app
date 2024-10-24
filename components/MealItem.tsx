import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Meal from '../models/meal';
import { Colors } from '../colors/Colors';
import MealDetails from './MealDetails';

interface MealItemProps {
  meal: Meal;
  onPress(): void;
}

function MealItem(props: MealItemProps) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: Colors.RippleColor }}
        style={({ pressed }) =>
          pressed && Platform.OS === 'ios' ? styles.buttonPressed : null
        }
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: props.meal.imageUrl }}
              style={styles.image}
            ></Image>
            <Text style={styles.title}>{props.meal.title}</Text>
          </View>
          <MealDetails meal={props.meal}></MealDetails>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
