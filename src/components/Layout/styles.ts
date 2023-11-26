import { StatusBar } from "react-native";
import styled from "styled-components/native";

const PADDING_TOP = StatusBar.currentHeight! + 24;

export const Container = styled.SafeAreaView.attrs({})`
  position: relative;
  flex: 1;

  padding: ${PADDING_TOP}px 24px 0;
`;
