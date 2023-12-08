import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { z } from "zod";

import {
  Button,
  DietPicker,
  Header,
  Input,
  Layout,
  Modal,
} from "@components/index";
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
import { AppError } from "@utils/AppError";

export type NewMealType = Partial<MealType>;

export function NewMeal() {
  const [meal, setMeal] = useState<NewMealType>({
    id: undefined,
    name: undefined,
    description: undefined,

    createdAt: undefined,
    diet: undefined,
  });

  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const [error, setError] = useState<{ message: string }>({
    message: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

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

  const submitNewMeal = async () => {
    try {
      const storedMeals = await getAllMeals();

      const id = storedMeals.length + 1;

      const newMeal: NewMealType = {
        ...meal,
        id,
        createdAt: formatDate(date, time) ?? new Date().toISOString(),
      };

      const formSchema = z.object({
        id: z.number(),

        name: z.string().min(1, "The name field is required"),
        description: z.string().optional(),

        createdAt: z.string(),

        diet: z.string().min(1, "You must pick a diet type for this meal!"),
      });

      formSchema.parse(newMeal);

      await createMeal(newMeal);

      navigation.navigate("feedbackMeal", { diet: newMeal.diet });
    } catch (err) {
      const newError = new AppError("All form fields with * must be filled");

      setError({ message: newError.message });
      setModalOpen(true);
    }
  };

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
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
          onPress={submitNewMeal}
        />
      </FormContainer>

      <Modal
        visible={modalOpen}
        message={error.message}
        actions={[{ text: "Okay", onPress: () => toggleModal() }]}
      />
    </Layout>
  );
}
