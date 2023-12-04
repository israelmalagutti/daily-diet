import { format } from "date-fns";

import { type MealType } from "@components/Meal/MealCard";

export type GroupedByReducerState = { [key: string]: MealType[] };

export const groupByDayReducer = (
  reducedState: GroupedByReducerState,
  meal: MealType
) => {
  const date = new Date(meal.createdAt);

  const mealYear = date.getFullYear();

  const formattedDate = format(date, `MMMM dd ${mealYear}`);

  reducedState[formattedDate] = reducedState[formattedDate] ?? [];
  reducedState[formattedDate].push(meal);

  return reducedState;
};

export const statementListParser = ([key, value]: [string, MealType[]]) => ({
  title: key,
  data: value,
});
