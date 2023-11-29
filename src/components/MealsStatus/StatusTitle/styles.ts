import styled from "styled-components/native";

export const Status = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Text = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
