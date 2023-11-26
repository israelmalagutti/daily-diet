import { ForkKnife } from "phosphor-react-native";

import { LogoIcon } from "@assets/Logo";

import { Container } from "./styles";

export function Logo() {
  return (
    <Container>
      <ForkKnife weight="bold" size={32} />

      <LogoIcon />
    </Container>
  );
}
