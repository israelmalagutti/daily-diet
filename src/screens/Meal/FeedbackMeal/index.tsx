import { useNavigation, useRoute } from "@react-navigation/native";

import { Layout } from "@components/index";
import { type DietStyleProps } from "@components/DietPicker/styles";

import { Container } from "./styles";

type RouteParams = {
  diet: DietStyleProps;
};

export function FeedbackMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { diet } = route.params as RouteParams;

  return (
    <Layout>
      <Container />
    </Layout>
  );
}
