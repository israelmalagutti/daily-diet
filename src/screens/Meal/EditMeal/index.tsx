import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { format } from "date-fns";
import { z } from "zod";

import { AppError } from "@utils/AppError";

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

import { Loading } from "@screens/Loading";

import { updateMeal } from "@storage/meals";

import {
  DateWrapper,
  DietPickerContainer,
  DietPickerWrapper,
  FormContainer,
  FormWrapper,
} from "./styles";

export type UpdatedMealType = Partial<MealType>;

type RouteParams = {
  meal: MealType;
};

export function EditMeal() {
  const [editedMeal, setEditedMeal] = useState<UpdatedMealType>({});

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [error, setError] = useState<{ message: string }>({
    message: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();

  const handleName = (name: string) => {
    setEditedMeal(prevState => ({ ...prevState, name }));
  };

  const handleDescription = (description: string) => {
    setEditedMeal(prevState => ({
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
    setEditedMeal(prevState => ({
      ...prevState,
      diet,
    }));
  };

  const formatDate = (newDate: string, newTime: string) => {
    if (newDate == "" && newTime == "") return new Date().toISOString();

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

  const submitEdittedMeal = async () => {
    try {
      const updatedMeal: MealType = {
        id: editedMeal.id ?? 0,

        name: editedMeal.name ?? "",
        description: editedMeal.description,

        createdAt: formatDate(date, time),
        diet: editedMeal.diet ?? "WITHIN",
      };

      const formSchema = z.object({
        id: z.number().min(1, "Id has to be greater than 0"),

        name: z.string().min(1, "The name field is required"),
        description: z.string().optional(),

        createdAt: z.string(),

        diet: z.string().min(1, "You must pick a diet type for this meal!"),
      });

      formSchema.parse(updatedMeal);

      await updateMeal(updatedMeal);

      navigation.navigate("mealInfo", { meal: updatedMeal });
    } catch (err: any) {
      const newError = new AppError(err.message);

      setError({ message: newError.message });
      setModalOpen(true);
    }
  };

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const fetchDateTime = (meal: MealType) => {
    const date = new Date(meal.createdAt);

    const formattedDate = format(date, "dd/MM/yyyy");
    setDate(formattedDate);

    const formattedTime = format(date, "HH:mm");
    setTime(formattedTime);
  };

  useFocusEffect(
    useCallback(() => {
      const { meal } = route.params as RouteParams;
      if (meal) {
        setEditedMeal(meal);

        fetchDateTime(meal);

        setIsLoading(false);
      }
    }, [])
  );

  if (isLoading) return <Loading />;

  return (
    <Layout bgColor="GRAY_300">
      <Header backButton="DEFAULT" screenName="Edit meal" />

      <FormContainer>
        <FormWrapper>
          <Input
            label="Name*"
            placeholder="Meal name"
            numberOfLines={1}
            returnKeyType="next"
            value={editedMeal.name}
            onTextChange={handleName}
          />

          <Input
            multiline
            label="Description"
            placeholder="Meal description"
            numberOfLines={4}
            textAlignVertical="top"
            returnKeyType="next"
            value={editedMeal.description}
            onTextChange={handleDescription}
          />

          <DateWrapper>
            <Input
              size="SM"
              label="Date"
              maskType="datetime"
              maskOptions={{
                format: "dd/MM/yyyy",
              }}
              placeholder="00/00/0000"
              keyboardType="decimal-pad"
              returnKeyType="next"
              value={date}
              onTextChange={handleDate}
            />

            <Input
              size="SM"
              label="Time"
              maskType="datetime"
              maskOptions={{ format: "HH:mm" }}
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
                isActive={editedMeal.diet === "WITHIN"}
                onPress={() => handleDietType("WITHIN")}
              />

              <DietPicker
                type="OFF"
                isActive={editedMeal.diet === "OFF"}
                onPress={() => handleDietType("OFF")}
              />
            </DietPickerContainer>
          </DietPickerWrapper>
        </FormWrapper>

        <Button
          text="Update meal"
          activeOpacity={0.85}
          onPress={submitEdittedMeal}
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
