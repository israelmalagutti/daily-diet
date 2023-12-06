import React from "react";
import { format } from "date-fns";

import { DietStyleProps } from "@components/DietPicker/styles";

import { Container, Name, Spacer, Status, Time } from "./styles";

export type MealType = {
  id: number;

  name: string;
  description?: string;

  createdAt: string;

  diet: DietStyleProps;
};

type MealCardProps = {
  onPress: (id: number) => void;
};

export function MealCard(meal: MealType, { onPress }: MealCardProps) {
  const date = new Date(meal.createdAt);

  const formattedTime = format(date, "HH:mm");

  return (
    <Container onPress={() => onPress(meal.id)}>
      <Time>{formattedTime.padStart(2, "0")}</Time>
      <Spacer />
      <Name>{meal.name}</Name>

      <Status type={meal.diet} />
    </Container>
  );
}
