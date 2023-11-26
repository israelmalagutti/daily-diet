import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  width: ${({ type }) => (type === "PRIMARY" ? "100%" : "auto")};

  flex-direction: row;

  align-self: ${({ type }) => (type === "PRIMARY" ? "" : "center")};
  align-items: center;
  justify-content: center;

  padding: 16px 24px;
  gap: 12px;

  border-radius: 6px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
