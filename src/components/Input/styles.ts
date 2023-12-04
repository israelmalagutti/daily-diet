import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export type InputStyleProps = "DEFAULT" | "SM";

type StyledContainerProps = {
  size: InputStyleProps;
};

type StyledInputProps = {
  isActive: boolean;
};

/** The size "SM" shoulde be used inside a Container/Wrapper with flex-direction: row; */
export const Container = styled.View<StyledContainerProps>`
  width: ${({ size }) =>
    (size === "DEFAULT" && "auto") || (size === "SM" && "100%")};

  flex: ${({ size }) => (size === "DEFAULT" && "none") || (size === "SM" && 1)};

  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  cursorColor: theme.COLORS.GREEN_DARK,
  selectionColor: theme.COLORS.GREEN_MID,
}))<StyledInputProps>`
  ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_300};
  `};

  padding: 14px;

  border-width: 1px;
  border-radius: 6px;
`;

export const StyledMaskedInput = styled(TextInputMask).attrs(({ theme }) => ({
  cursorColor: theme.COLORS.GREEN_DARK,
  selectionColor: theme.COLORS.GREEN_MID,
}))<StyledInputProps>`
  ${({ theme, isActive }) => css`
    border-color: ${isActive ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_300};
  `};

  padding: 14px;

  border-width: 1px;
  border-radius: 6px;
`;
