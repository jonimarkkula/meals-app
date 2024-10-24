import { useEffect, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/NavigationPages';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { Colors } from '../colors/Colors';

type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetailScreen'
>;

function MealDetailScreen(props: MealDetailScreenProps) {
  const meal = props.route.params.meal;

  function headerButtonPressHandler() {
    console.log('Placeholder to add meal to favourites');
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            onPress={headerButtonPressHandler}
            color={Colors.AppBackgroundColor}
          ></IconButton>
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  useEffect(() => {
    props.navigation.setOptions({
      title: meal.title,
    });
  }, [meal, props.navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.imageTitle}>{meal.title}</Text>
      <MealDetails
        meal={meal}
        containerStyle={styles.mealDetailsContainer}
      ></MealDetails>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients:</SubTitle>
          <List listData={meal.ingredients}></List>
          <SubTitle>Steps:</SubTitle>
          <List listData={meal.steps}></List>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  imageTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  mealDetailsContainer: {
    flexDirection: 'column',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
