import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type StatusCardStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type StatusCardProps = {
  size: StatusCardStyleProps;
  type: StatusCardStyleProps;
};

type IconStyleProps = {
  type: StatusCardStyleProps;
};

export const Container = styled.Pressable<StatusCardProps>`
  position: relative;

  width: ${({ size }) => (size === "PRIMARY" ? "100%" : "auto")};
  flex: ${({ size }) => (size === "PRIMARY" ? "auto" : 1)};

  background-color: ${({ theme, type }) =>
    (type === "PRIMARY" && theme.COLORS.GREEN_LIGHT) ||
    (type === "SECONDARY" && theme.COLORS.RED_LIGHT) ||
    (type === "TERTIARY" && theme.COLORS.GRAY_200)};

  align-items: center;
  justify-content: center;

  padding: 24px 16px;

  border-radius: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs({
  size: 24,
})<IconStyleProps>`
  position: absolute;

  top: 8px;
  right: 8px;

  color: ${({ theme, type }) =>
    (type === "PRIMARY" && theme.COLORS.GREEN_DARK) ||
    (type === "SECONDARY" && theme.COLORS.RED_DARK)};
`;
