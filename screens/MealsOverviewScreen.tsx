import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/NavigationPages';

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverview'
>;

function MealsOverviewScreen(props: MealsOverviewScreenProps) {
  const category = props.route.params?.category;

  return (
    <View style={styles.container}>
      <Text>Meals Overview SCreen Id: {category.id}</Text>
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
