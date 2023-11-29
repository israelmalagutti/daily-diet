import styled, { css } from "styled-components/native";

export type DietStyleProps = "WITHIN" | "OFF";

export type StyledPickerProps = {
  isActive: boolean;
  type: DietStyleProps;
};

type StyledIndicatorProps = {
  type: DietStyleProps;
};

export const Container = styled.TouchableOpacity<StyledPickerProps>`
  background-color: ${({ theme, isActive, type }) =>
    (!isActive && theme.COLORS.GRAY_200) ||
    (isActive && type === "WITHIN" && theme.COLORS.GREEN_LIGHT) ||
    (isActive && type === "OFF" && theme.COLORS.RED_LIGHT)};

  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 16px;
  gap: 8px;

  border-color: ${({ theme, isActive, type }) =>
    (!isActive && "#FFFFFF00") ||
    (isActive && type === "WITHIN" && theme.COLORS.GREEN_DARK) ||
    (isActive && type === "OFF" && theme.COLORS.RED_DARK)};
  border-width: 1px;
  border-radius: 6px;
`;

export const Indicator = styled.View<StyledIndicatorProps>`
  background-color: ${({ theme, type }) =>
    type === "WITHIN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  height: 8px;
  width: 8px;

  border-radius: 9999px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
