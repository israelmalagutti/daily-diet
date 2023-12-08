import styled, { css } from "styled-components/native";

import { type DietStyleProps } from "@components/DietPicker/styles";

type DietProps = {
  diet: DietStyleProps;
};

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
  `};

  position: absolute;

  height: 93%;

  right: 0;
  bottom: 0;
  left: 0;

  padding: 40px 24px 32px;

  border-radius: 20px;
`;

export const InfoContainer = styled.View`
  flex: 1;

  gap: 24px;
`;

export const MealContainer = styled.View`
  gap: 8px;
`;

const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Meal = {
  Name,
  Description,
};

const Header = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

const Content = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DateTime = {
  Header,
  Content,
};

export const DietContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `}
  flex-direction: row;

  align-self: flex-start;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  gap: 8px;

  border-radius: 999px;
`;

export const DietIndicator = styled.View<DietProps>`
  ${({ theme, diet }) => css`
    background-color: ${diet === "WITHIN"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}

  height: 8px;
  width: 8px;

  border-radius: 999px;
`;

export const DietText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ActionsContainer = styled.View`
  gap: 8px;
`;
