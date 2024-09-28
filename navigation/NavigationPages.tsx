import Category from '../models/category';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { category: Category };
};
