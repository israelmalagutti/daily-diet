import { MaterialIcons } from "@expo/vector-icons";

import { ButtonTypeStyleProps, Container, Icon, Text } from "./styles";

type ButtonProps = {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;

  type?: ButtonTypeStyleProps;
  onPress?: () => void;
};

export function Button({ icon, text, type = "PRIMARY", onPress }: ButtonProps) {
  return (
    <Container type={type} onPress={onPress}>
      {icon && <Icon name={icon} size={18} />}

      <Text>{text}</Text>
    </Container>
  );
}
