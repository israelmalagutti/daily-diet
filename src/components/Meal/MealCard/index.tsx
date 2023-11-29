import React from "react";
import { format } from "date-fns";

import { Container, Name, Spacer, Status, Time } from "./styles";

export type MealType = {
  id: number;

  name: string;
  description?: string;
  withinDiet: boolean;

  createdAt: string;
};

type MealCardProps = {
  onPress: (id: number) => void;
};

/** Fix time */
export function MealCard(meal: MealType, { onPress }: MealCardProps) {
  const date = new Date(meal.createdAt);
  // console.log(date);

  const formattedTime = format(date, "HH:mm");

  return (
    <Container onPress={() => onPress(meal.id)}>
      <Time>{formattedTime.padStart(2, "0")}</Time>
      <Spacer />
      <Name>{meal.name}</Name>

      <Status type={meal.withinDiet} />
    </Container>
  );
}
