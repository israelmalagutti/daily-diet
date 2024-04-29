import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type CardTypeStyleProp = "PRIMARY" | "SECONDARY" | "TERTIARY";
export type CardSizeStyleProp = "MD" | "SM";

type StyleProps = {
  type: CardTypeStyleProp;
};

type CardStyleProps = StyleProps & {
  size: CardSizeStyleProp;
};

export const Container = styled.Pressable<CardStyleProps>`
  ${({ theme, size, type }) => css`
    background-color: ${(type === "PRIMARY" && theme.COLORS.GREEN_LIGHT) ||
    (type === "SECONDARY" && theme.COLORS.RED_LIGHT) ||
    (type === "TERTIARY" && theme.COLORS.GRAY_200)};

    width: ${size === "MD" ? "100%" : "auto"};
    flex: ${size === "MD" ? "auto" : 1};
  `}
  position: relative;

  align-items: center;
  justify-content: center;

  padding: 24px 16px;

  border-radius: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs({
  size: 24,
})<StyleProps>`
  ${({ theme, type }) =>
    css`
      color: ${(type === "PRIMARY" && theme.COLORS.GREEN_DARK) ||
      (type === "SECONDARY" && theme.COLORS.RED_DARK)};
    `}

  position: absolute;

  top: 8px;
  right: 8px;
`;
