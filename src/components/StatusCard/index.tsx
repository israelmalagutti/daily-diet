import React from "react";

import {
  Container,
  Icon,
  StatusCardStyleProps,
  StatusText,
  Text,
} from "./styles";

type StatusCardProps = {
  percentage: number;
  type?: StatusCardStyleProps;

  onPress: () => void;
};

export function StatusCard({
  percentage,
  type = "PRIMARY",
  onPress,
}: StatusCardProps) {
  return (
    <Container type={type} onPress={onPress}>
      <Icon type={type} />
      <StatusText>{percentage}%</StatusText>
      <Text>meals within the diet</Text>
    </Container>
  );
}
