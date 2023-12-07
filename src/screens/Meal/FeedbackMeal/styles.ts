import styled, { css } from "styled-components/native";

import { DietStyleProps } from "@components/DietPicker/styles";

type TitleStyleProps = {
  diet: DietStyleProps;
};

export const StyleContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 0 0 104px;
  gap: 40px;
`;

export const TitleContainer = styled.View`
  gap: 8px;
`;

export const Title = styled.Text<TitleStyleProps>`
  ${({ theme, diet }) => css`
    text-align: center;
    color: ${(diet === "WITHIN" && theme.COLORS.GREEN_DARK) ||
    (diet === "OFF" && theme.COLORS.RED_DARK)};

    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Diet = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Illustration = styled.Image``;

export const ButtonContainer = styled.View`
  padding: 0 48px;
`;
