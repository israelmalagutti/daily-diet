import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const window = Dimensions.get("window");

export const StyledModal = styled.Modal`
  ${({ theme }) => css`
    background-color: ${`${theme.COLORS.GRAY_700}20`};
  `}
  position: relative;

  flex: 1;
`;

export const Backdrop = styled.View`
  ${({ theme }) => css`
    background-color: ${`${theme.COLORS.GRAY_700}35`};
  `}

  flex: 1;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${`${theme.COLORS.GRAY_100}`};
  `}
  position: absolute;

  top: ${50 - window.height / 100}%;
  right: 24px;
  left: 24px;

  align-self: center;

  padding: 24px;
  gap: 32px;

  border-radius: 8px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ActionsContainer = styled.View`
  flex-direction: row;

  align-self: flex-end;

  gap: 12px;
`;
