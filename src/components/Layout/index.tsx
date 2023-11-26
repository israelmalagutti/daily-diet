import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>{children}</Container>
      <StatusBar style="dark" />
    </>
  );
}
