import { useCallback, useMemo, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { Header, Layout, MealsStatus } from "@components/index";

import { MealType } from "@dtos/index";

import { Loading } from "@screens/Loading";

import {
  Container,
  Container2,
  HeaderContainer,
  StatisticsContainer,
  Title,
} from "./styles";
import { longestStreak } from "@utils/longestStreak";

type RouteParams = {
  meals: MealType[];
  percentageOfMealsWithinDiet: number;
};

export function MealStatistics() {
  const [meals, setMeals] = useState<MealType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();

  const bestStreakOfMeals = useMemo(() => longestStreak(meals), [meals]);

  const recordedMeals = meals.length;

  const mealsWithinDiet = meals.filter(meal => meal.diet === "WITHIN").length;
  const mealsOffDiet = meals.length - mealsWithinDiet;

  const averageMealsWithinDiet = useMemo(() => {
    return Number((mealsWithinDiet / meals.length) * 100).toFixed(2);
  }, []);

  const fetchRouteParams = (meals: MealType[]) => {
    setMeals(meals);
  };

  useFocusEffect(
    useCallback(() => {
      const { meals } = route.params as RouteParams;
      fetchRouteParams(meals);

      setIsLoading(false);
    }, [])
  );

  if (isLoading) return <Loading />;

  return (
    <Layout
      bgColor={
        (mealsWithinDiet > mealsOffDiet ? "GREEN_LIGHT" : "RED_LIGHT") ??
        "GRAY_600"
      }
    >
      <HeaderContainer>
        <Header
          backButton={
            (mealsWithinDiet > mealsOffDiet ? "PRIMARY" : "SECONDARY") ??
            "DEFAULT"
          }
        />

        <MealsStatus.Title
          percentage={String(averageMealsWithinDiet)}
          text="of meals within the diet"
        />
      </HeaderContainer>

      <Container>
        <Title>General statistics</Title>

        <StatisticsContainer>
          <MealsStatus.Card type="TERTIARY">
            <MealsStatus.Title
              title={String(bestStreakOfMeals)}
              text="best streak of meals within the diet"
            />
          </MealsStatus.Card>

          <MealsStatus.Card type="TERTIARY">
            <MealsStatus.Title
              title={String(recordedMeals)}
              text="recorded meals"
            />
          </MealsStatus.Card>

          <Container2>
            <MealsStatus.Card type="PRIMARY">
              <MealsStatus.Title
                title={String(mealsWithinDiet)}
                text="meals within the diet"
              />
            </MealsStatus.Card>

            <MealsStatus.Card type="SECONDARY">
              <MealsStatus.Title
                title={String(mealsOffDiet)}
                text="meals off the diet"
              />
            </MealsStatus.Card>
          </Container2>
        </StatisticsContainer>
      </Container>
    </Layout>
  );
}
