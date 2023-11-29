import React, { useState } from "react";

import { Button, DietPicker, Header, Input, Layout } from "@components/index";

import { Label } from "@components/Input/styles";
import { DietStyleProps } from "@components/DietPicker/styles";

import {
  DateWrapper,
  DietPickerWrapper,
  FormContainer,
  FormWrapper,
} from "./styles";

type Meal = {
  name: string;
  description: string;

  date?: Date;
  diet?: DietStyleProps;
};

export function NewMeal() {
  const [meal, setMeal] = useState<Meal>({
    name: "",
    description: "",
    date: undefined,
    diet: undefined,
  });

  const submitNewMeal = (data: Meal) => {
    try {
      console.log({ "DATA: ": data });
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
            label="Name"
            numberOfLines={1}
            onTextChange={name => setMeal({ ...meal, name: name })}
          />

          <Input
            label="Description"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            onTextChange={description =>
              setMeal(prevState => ({
                ...prevState,
                description,
              }))
            }
          />

          <DateWrapper>
            <Input label="Date" size="SM" />
            <Input label="Time" size="SM" />
          </DateWrapper>

          {/* Container */}
          <Label>Is meal part of the diet?</Label>
          <DietPickerWrapper>
            <DietPicker
              type="WITHIN"
              isActive={meal.diet === "WITHIN"}
              onPress={() =>
                setMeal(prevState => ({ ...prevState, diet: "WITHIN" }))
              }
            />
            <DietPicker
              type="OFF"
              isActive={meal.diet === "OFF"}
              onPress={() =>
                setMeal(prevState => ({ ...prevState, diet: "OFF" }))
              }
            />
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
