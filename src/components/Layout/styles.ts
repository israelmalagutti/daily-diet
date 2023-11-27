import { StatusBar } from "react-native";
import styled from "styled-components/native";

import theme from "@theme/index";

export type BackgroundColor = keyof typeof theme.COLORS;

type ContainerStyleProps = {
  bgColor?: BackgroundColor;
};

const PADDING_TOP = StatusBar.currentHeight! + 24;

export const Container = styled.SafeAreaView<ContainerStyleProps>`
  position: relative;

  flex: 1;

  background-color: ${({ theme, bgColor }) =>
    bgColor ? theme.COLORS[bgColor] : theme.COLORS.GRAY_100};

  padding: ${PADDING_TOP}px 0 0;
`;
