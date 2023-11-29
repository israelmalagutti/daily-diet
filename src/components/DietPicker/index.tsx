import { TouchableOpacityProps } from "react-native";
import React from "react";

import { Container, Indicator, StyledPickerProps, Text } from "./styles";

type DietPickerProps = TouchableOpacityProps & StyledPickerProps & {};

export function DietPicker({ isActive, type, ...rest }: DietPickerProps) {
  return (
    <Container {...rest} type={type} isActive={isActive} activeOpacity={0.7}>
      <Indicator type={type} />

      <Text>{type === "WITHIN" ? "Yes" : "No"}</Text>
    </Container>
  );
}
