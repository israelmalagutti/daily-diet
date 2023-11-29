import React from "react";

import { Header, Layout } from "@components/index";

import { Container } from "./styles";

type Meal = {
  name: string;
  description: string;

  date?: Date;
  diet?: boolean;
};

export function NewMeal() {
  return (
    <Layout bgColor="GRAY_300">
      <Header backButton="DEFAULT" screenName="New meal" />
    </Layout>
  );
}
