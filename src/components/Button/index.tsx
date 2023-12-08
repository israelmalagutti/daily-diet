import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonTypeStyleProps, Container, Icon, Text } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;

  size?: ButtonTypeStyleProps;
  type?: ButtonTypeStyleProps;
  onPress?: () => void;
};

export function Button({
  icon,
  text,

  size = "PRIMARY",
  type = "PRIMARY",
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} type={type} size={size} onPress={onPress}>
      {!!icon && <Icon name={icon} size={18} type={type} />}

      <Text type={type} size={size}>
        {text}
      </Text>
    </Container>
  );
}
