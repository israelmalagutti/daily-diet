import { useNavigation, useRoute } from "@react-navigation/native";

import { Button, Layout } from "@components/index";
import { type DietStyleProps } from "@components/DietPicker/styles";

import personHappy from "@assets/person/personHappy.png";
import personUpset from "@assets/person/personUpset.png";

import {
  Diet,
  Illustration,
  StyleContainer,
  Subtitle,
  Title,
  TitleContainer,
} from "./styles";

type RouteParams = {
  diet: DietStyleProps;
};

export function FeedbackMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { diet } = route.params as RouteParams;

  const TITLE =
    (diet === "WITHIN" && "Keep it up!") || (diet === "OFF" && "What a pitty!");

  const SUBTITLE =
    (diet === "WITHIN" && (
      <Subtitle>
        You <Diet>continue on the diet</Diet>. Very good!
      </Subtitle>
    )) ||
    (diet === "OFF" && (
      <Subtitle>
        You're <Diet>off the diet</Diet> this time, but keep trying and don't
        give up! Very good!
      </Subtitle>
    ));

  const ILLUSTRATION =
    (diet === "WITHIN" && personHappy) || (diet === "OFF" && personUpset);

  const handle = () => {
    navigation.reset({ routes: [{ name: "home" }] });
  };

  return (
    <Layout>
      <StyleContainer>
        <TitleContainer>
          <Title diet={diet}>{TITLE}</Title>
          {SUBTITLE}
        </TitleContainer>

        <Illustration alt="Illustration" source={ILLUSTRATION} />

        <Button
          size="SECONDARY"
          text=" Go to the home screen"
          onPress={handle}
        />
      </StyleContainer>
    </Layout>
  );
}
