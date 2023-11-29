import { Layout } from "@components/index";

import { Container, LoadingIndicator } from "./styles";
import { StatusBar } from "expo-status-bar";

export function Loading() {
  return (
    <Container>
      <StatusBar translucent />
      <LoadingIndicator />
    </Container>
  );
}
