import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";

import { Logo } from "@components/Logo";

import JhonDoe from "@assets/jhon-doe.png";
import { AvatarImage, NavigationButton, Container, ScreenName } from "./styles";
import { View } from "react-native";

type HeaderNavigationProps = {
  screenName?: string;
  backButton?: string;
};

type HeaderProps = HeaderNavigationProps;

export function Header({ backButton, screenName }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      {backButton ? (
        <NavigationButton onPress={() => navigation.goBack()}>
          <ArrowLeft color={backButton} size={24} />
        </NavigationButton>
      ) : (
        <Logo />
      )}

      <ScreenName>{screenName && screenName}</ScreenName>

      {/* AvatarPic */}
      {backButton ? (
        <View style={{ width: 40, height: 40 }} />
      ) : (
        <AvatarImage source={JhonDoe} />
      )}
    </Container>
  );
}
