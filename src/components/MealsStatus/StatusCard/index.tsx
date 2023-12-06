import React from "react";

import { StatusTitle } from "../StatusTitle";

import { Container, Icon, StatusCardStyleProps } from "./styles";

type StatusCardProps = {
  children: React.ReactNode;

  hasIcon?: boolean;
  size?: StatusCardStyleProps;
  type?: StatusCardStyleProps;

  onPress?: () => void;
};

export function StatusCard({
  children,

  hasIcon,
  size = "PRIMARY",
  type = "PRIMARY",

  onPress,
}: StatusCardProps) {
  return (
    <Container size={size} type={type} onPress={onPress}>
      {!!hasIcon && <Icon type={type} />}

      {children}
    </Container>
  );
}
