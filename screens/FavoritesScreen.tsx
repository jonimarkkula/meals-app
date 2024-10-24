import { StyleSheet, Text, View } from 'react-native';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen Placeholder</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
