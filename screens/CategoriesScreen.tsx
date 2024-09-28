import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import GategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationPages';

type CategoriesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsCategories'
>;

function CategoriesScreen(props: CategoriesScreenProps) {
  function renderCategoryItem(item: Category): JSX.Element {
    function onCategorySelect() {
      props.navigation.navigate('MealsOverview', {
        category: item,
      });
    }

    return <GategoryGridTile category={item} onPress={onCategorySelect} />;
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => {
        return category.id;
      }}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
