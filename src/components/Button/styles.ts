import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type: ButtonTypeStyleProps;
  size: ButtonTypeStyleProps;
};

type IconProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_600 : "#ffffff00"};
  width: ${({ size }) => (size === "PRIMARY" ? "100%" : "auto")};

  flex-direction: row;

  align-self: ${({ size }) => (size === "PRIMARY" ? "" : "center")};
  align-items: center;
  justify-content: center;

  padding: 16px 24px;
  gap: 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons)<IconProps>`
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;

export const Text = styled.Text<ButtonProps>`
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
