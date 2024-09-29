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
  function renderCategoryItem(itemData: { item: Category }): JSX.Element {
    function onCategorySelect() {
      props.navigation.navigate('MealsOverview', {
        category: itemData.item,
      });
    }

    return (
      <GategoryGridTile category={itemData.item} onPress={onCategorySelect} />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => {
        return category.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
