import { useNavigation, useRoute } from "@react-navigation/native";

import { Button, Header, Layout, Modal } from "@components/index";
import { type MealType } from "@components/Meal/MealCard";

import {
  ActionsContainer,
  DateTime,
  DietContainer,
  DietIndicator,
  DietText,
  ContentContainer,
  Meal,
  MealContainer,
  InfoContainer,
} from "./styles";
import { format } from "date-fns";
import { useState } from "react";
import { deleteMeal } from "@storage/meals";

type RouteParams = {
  meal: MealType;
};

export function MealInfo() {
  const [modalOpen, setModalOpen] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const date = new Date(meal.createdAt);

  const year = format(date, "dd/MM/yyyy");
  const time = format(date, "HH:ss");

  const LAYOUT_BACKGROUND_COLOR =
    meal.diet === "WITHIN" ? "GREEN_LIGHT" : "RED_LIGHT";

  const DIET_TEXT = meal.diet === "WITHIN" ? "Within diet" : "Off diet";

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const handleDelete = async (meal: MealType) => {
    try {
      await deleteMeal(meal);

      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout bgColor={LAYOUT_BACKGROUND_COLOR}>
      <Header backButton="DEFAULT" screenName="Meal" />

      <ContentContainer>
        <InfoContainer>
          <MealContainer>
            <Meal.Name numberOfLines={2}>{meal.name}</Meal.Name>

            <Meal.Description>
              {meal.description ?? "This meal doens't have a description"}
            </Meal.Description>
          </MealContainer>

          <MealContainer>
            <DateTime.Header>Date and time</DateTime.Header>
            <DateTime.Content>{`${year} at ${time}`}</DateTime.Content>
          </MealContainer>

          <DietContainer>
            <DietIndicator diet={meal.diet} />
            <DietText>{DIET_TEXT}</DietText>
          </DietContainer>
        </InfoContainer>

        <ActionsContainer>
          <Button
            icon="edit"
            text="Update meal"
            onPress={() => navigation.navigate("editMeal", { meal })}
          />
          <Button
            type="SECONDARY"
            icon="delete-forever"
            text="Delete meal"
            onPress={toggleModal}
          />
        </ActionsContainer>

        <Modal
          visible={modalOpen}
          message="Are you sure you want to delete this meal?"
          actions={[
            { text: "Cancel", type: "SECONDARY", onPress: () => toggleModal() },
            { text: "Delete", onPress: () => handleDelete(meal) },
          ]}
        />
      </ContentContainer>
    </Layout>
  );
}
