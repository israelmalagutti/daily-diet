import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";

import theme from "@theme/index";
import { Logo } from "@components/Logo";

import JhonDoe from "@assets/jhon-doe.png";
import { AvatarImage, NavigationButton, Container, ScreenName } from "./styles";

type HeaderNavigationProps = {
  screenName?: string;
  backButton?: "DEFAULT" | "PRIMARY" | "SECONDARY";
};

type HeaderProps = HeaderNavigationProps;

export function Header({ backButton, screenName }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Container>
      {backButton ? (
        <NavigationButton onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={
              (backButton === "DEFAULT" && theme.COLORS.GRAY_600) ||
              (backButton === "PRIMARY" && theme.COLORS.GREEN_DARK) ||
              (backButton === "SECONDARY" && theme.COLORS.RED_DARK) ||
              undefined
            }
            size={24}
          />
        </NavigationButton>
      ) : (
        <Logo />
      )}

      <ScreenName>{screenName ?? screenName}</ScreenName>

      {/* AvatarPic */}
      {backButton ? (
        <View style={{ width: 40, height: 40 }} />
      ) : (
        <AvatarImage source={JhonDoe} />
      )}
    </Container>
  );
}
