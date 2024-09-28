import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Category from '../models/category';

interface GategoryGridTileProps {
  category: Category;
  onPress(): void;
}

function GategoryGridTile(props: GategoryGridTileProps) {
  return (
    <View style={[styles.gridItem, { backgroundColor: props.category.color }]}>
      <Pressable
        android_ripple={{ color: '#FFFFF7' }}
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === 'ios' ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{props.category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    minHeight: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
