import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";

import { Button, DietPicker, Header, Input, Layout } from "@components/index";
import { MealType } from "@components/Meal/MealCard";

import { Label } from "@components/Input/styles";
import { DietStyleProps } from "@components/DietPicker/styles";

import { createMeal, getAllMeals } from "@storage/meals";

import {
  DateWrapper,
  DietPickerContainer,
  DietPickerWrapper,
  FormContainer,
  FormWrapper,
} from "./styles";

type NewMealType = {
  id: number | null;

  name: string;
  description: string;

  createdAt: string;
  diet: DietStyleProps | null;
};

/**
 * Fix: first time entering the screen and submitting a new meal, id is null, but the second time it is initialized
 * Fix: After sending a meal, navigates to home screen, but if create another meal, it adds to the same time as the other
 */
export function NewMeal() {
  const [meal, setMeal] = useState<NewMealType>({
    id: null,
    name: "",
    description: "",

    createdAt: "",
    diet: null,
  });

  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const navigation = useNavigation();

  const handleName = (name: string) => {
    setMeal({ ...meal, name: name });
  };

  const handleDescription = (description: string) => {
    setMeal(prevState => ({
      ...prevState,
      description,
    }));
  };

  const handleDate = (date: string) => {
    setDate(date);
  };

  const handleTime = (time: string) => {
    setTime(time);
  };

  const handleDietType = (diet: DietStyleProps) => {
    setMeal(prevState => ({
      ...prevState,
      diet,
    }));
  };

  const formatDate = (newDate: string, newTime: string) => {
    if (newDate == "" && newTime == "") return;

    const [day, month, year] = newDate.split("/");
    const monthIndex = Number(month) - 1;

    const [hours, minutes] = newTime.split(":");

    const formattedDate = new Date(
      Number(year),
      monthIndex,
      Number(day),
      Number(hours),
      Number(minutes)
    ).toISOString();

    return formattedDate;
  };

  const submitNewMeal = async (data: MealType) => {
    try {
      const storedMeals = await getAllMeals();

      const id = storedMeals.length + 1;

      console.log(JSON.stringify(formatDate(date, time)));
      // @ts-ignore
      setMeal(prevState => ({
        ...prevState,
        id,
        createdAt: formatDate(date, time) || new Date().toISOString(),
      }));
      console.log("MEAL: " + JSON.stringify(meal));

      const formSchema = z.object({
        id: z.number(),

        name: z.string().min(1, "The name field is required"),
        description: z.string().optional(),

        createdAt: z.string(),

        diet: z.custom(),
      });

      formSchema.parse(meal);

      await createMeal(meal);

      navigation.navigate("feedbackMeal");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout bgColor="GRAY_300">
      <Header backButton="DEFAULT" screenName="New meal" />

      <FormContainer>
        <FormWrapper>
          <Input
            label="Name*"
            placeholder="Meal name"
            numberOfLines={1}
            value={meal.name}
            onTextChange={handleName}
          />

          <Input
            multiline
            label="Description"
            placeholder="Meal description"
            numberOfLines={4}
            textAlignVertical="top"
            value={meal.description}
            onTextChange={handleDescription}
          />

          <DateWrapper>
            <Input
              size="SM"
              label="Date"
              maskType="custom"
              maskOptions={{
                mask: "99/99/9999",
              }}
              placeholder="00/00/0000"
              keyboardType="decimal-pad"
              value={date}
              onTextChange={handleDate}
            />

            <Input
              size="SM"
              label="Time"
              maskType="custom"
              maskOptions={{ mask: "99:99" }}
              placeholder="00:00"
              keyboardType="numeric"
              value={time}
              onTextChange={handleTime}
            />
          </DateWrapper>

          {/* Container */}
          <DietPickerWrapper>
            <Label>Is meal part of the diet?*</Label>
            <DietPickerContainer>
              <DietPicker
                type="WITHIN"
                isActive={meal.diet === "WITHIN"}
                onPress={() => handleDietType("WITHIN")}
              />

              <DietPicker
                type="OFF"
                isActive={meal.diet === "OFF"}
                onPress={() => handleDietType("OFF")}
              />
            </DietPickerContainer>
          </DietPickerWrapper>
        </FormWrapper>

        <Button
          text="Create meal"
          activeOpacity={0.85}
          onPress={() => submitNewMeal(meal)}
        />
      </FormContainer>
    </Layout>
  );
}
