import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonTypeStyleProps, Container, Icon, Text } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;

  type?: ButtonTypeStyleProps;
  onPress?: () => void;
};

export function Button({
  icon,
  text,
  type = "PRIMARY",
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} type={type} onPress={onPress}>
      {icon && <Icon name={icon} size={18} />}

      <Text>{text}</Text>
    </Container>
  );
}
