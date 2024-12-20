import Category from '../models/category';
import Meal from '../models/meal';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { category: Category };
  MealDetailScreen: { meal: Meal };
};

export type DrawerStackParamList = {
  MealsCategoriesDrawer: undefined;
  Favorites: undefined;
};
