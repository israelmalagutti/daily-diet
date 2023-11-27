import { StatusBar } from "expo-status-bar";
import React from "react";

import { BackgroundColor, Container } from "./styles";

type LayoutProps = {
  children: React.ReactNode;

  bgColor?: BackgroundColor;
};

export function Layout({ bgColor, children }: LayoutProps) {
  return (
    <>
      <Container bgColor={bgColor}>{children}</Container>
      <StatusBar style="dark" />
    </>
  );
}
