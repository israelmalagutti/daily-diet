import styled from "styled-components/native";

export const MealsContainer = styled.View`
  padding: 32px 0 0;
  gap: 32px;
`;

export const NewMealContainer = styled.View`
  gap: 8px;
`;

export const MealsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
