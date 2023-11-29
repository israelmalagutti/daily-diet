import React, { useState } from "react";

import { Button, Header, Input, Layout } from "@components/index";

import { Label } from "@components/Input/styles";

import { DateWrapper, FormContainer, FormWrapper } from "./styles";

type Meal = {
  name: string;
  description: string;

  date?: Date;
  diet?: boolean;
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
