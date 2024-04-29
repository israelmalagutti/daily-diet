import React from "react";

import {
  Container,
  Icon,
  CardSizeStyleProp,
  CardTypeStyleProp,
} from "./styles";

type StatusCardProps = {
  children: React.ReactNode;

  percentage?: number;
  size?: CardSizeStyleProp;
  type?: CardTypeStyleProp;

  hasIcon?: boolean;

  onPress?: () => void;
};

export function StatusCard({
  children,

  percentage,
  size = "MD",
  type = "PRIMARY",

  hasIcon,

  onPress,
}: StatusCardProps) {
  const STYLE_TYPE: CardTypeStyleProp =
    (!!type && type) ??
    (!!percentage && (percentage > 50 ? "PRIMARY" : "SECONDARY"));

  return (
    <Container size={size} type={STYLE_TYPE} onPress={onPress}>
      {!!hasIcon && <Icon type={STYLE_TYPE} />}

      {children}
    </Container>
  );
}
