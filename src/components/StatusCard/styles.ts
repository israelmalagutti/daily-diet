import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type StatusCardStyleProps = "PRIMARY" | "SECONDARY";

type StatusCardProps = {
  type: StatusCardStyleProps;
};

export const Container = styled.Pressable<StatusCardProps>`
  position: relative;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  align-items: center;
  justify-content: center;

  padding: 20px 16px;

  border-radius: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs({
  size: 24,
})<StatusCardProps>`
  position: absolute;

  top: 8px;
  right: 8px;

  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
