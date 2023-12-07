import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header, Layout } from "@components/index";
import { type MealType } from "@components/Meal/MealCard";

import { Container } from "./styles";

type RouteParams = {
  meal: MealType;
};

export function MealInfo({}) {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  return (
    <Layout>
      <Header backButton="DEFAULT" screenName="New meal" />

      <Container>
        <Text>MealInfo</Text>
      </Container>
    </Layout>
  );
}
