export type DietProps = "WITHIN" | "OFF";

export type MealType = {
  id: number;

  name: string;
  description?: string;

  createdAt: string;

  diet: DietProps;
};
