import { MealType } from "@dtos/index";

export const longestStreak = (meals: MealType[]) => {
  const diets = meals.map(meal => meal.diet);

  let streak = 0;
  let longest = 0;

  for (let diet of diets) {
    if (diet === "OFF") {
      streak = 0;
      continue;
    }

    streak++;
    if (streak > longest) longest = streak;
  }

  return longest;
};
