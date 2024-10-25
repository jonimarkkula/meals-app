import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import GategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  DrawerStackParamList,
  RootStackParamList,
} from '../navigation/NavigationPages';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationProp } from '../components/util';

interface CategoriesProp {
  navigation: NavigationProp;
  route:
    | NativeStackScreenProps<RootStackParamList, 'MealsCategories'>['route']
    | DrawerScreenProps<DrawerStackParamList, 'MealsCategoriesDrawer'>['route'];
}

function CategoriesScreen(props: CategoriesProp) {
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
