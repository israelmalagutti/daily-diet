import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #fafafa;

  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 48,
  color: "#639339",
})``;
