import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button, Header, Layout, Meal, MealsStatus } from "@components/index";

import { MealType } from "@dtos/index";

import { getAllMeals } from "@storage/index";

import {
  GroupedByReducerState,
  groupByDayReducer,
  statementListParser,
} from "@utils/groupByDayReducer";

import { MealsContainer, MealsText, NewMealContainer } from "./styles";

export type MealSectionType = {
  sectionDate: string;
  content: MealType[];
};

export function Home() {
  const [meals, setMeals] = useState<MealType[]>([]);

  const navigation = useNavigation();

  const mealsWithinDiet = meals.filter(meal => meal.diet === "WITHIN").length;

  const averageMealsWithinDiet = Number(
    ((mealsWithinDiet / meals.length) * 100).toFixed(2)
  );

  const groupByDay = useCallback(
    (data: MealType[]) =>
      Object.entries(
        data.reduce(groupByDayReducer, {} as GroupedByReducerState)
      ).map(statementListParser),
    []
  );

  async function fetchMeals() {
    try {
      const data = await getAllMeals();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {}, []));

  useEffect(() => {
    fetchMeals();
  }, [meals]);

  return (
    <Layout>
      <Header />

      <MealsContainer>
        <MealsStatus.Card
          hasIcon
          percentage={(!!averageMealsWithinDiet && averageMealsWithinDiet) || 0}
          onPress={() =>
            navigation.navigate("mealStatistics", {
              meals,
            })
          }
        >
          <MealsStatus.Title
            percentage={
              (!!averageMealsWithinDiet && averageMealsWithinDiet) || 0
            }
            text="of meals within the diet"
          />
        </MealsStatus.Card>

        <NewMealContainer>
          <MealsText>Meals</MealsText>
          <Button
            text="Add a meal"
            icon="add"
            onPress={() => navigation.navigate("newMeal")}
          />
        </NewMealContainer>

        <Meal.Sections meals={groupByDay(meals)} />
      </MealsContainer>
    </Layout>
  );
}
