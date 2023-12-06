import styled from "styled-components/native";

import { DietStyleProps } from "@components/DietPicker/styles";

type StatusStyleProps = {
  type: DietStyleProps;
};

export const Container = styled.Pressable`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 14px 12px 14px 16px;
  gap: 12px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-width: 1px;
  border-radius: 6px;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Spacer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  width: 1px;
  height: 14px;
`;

export const Name = styled.Text`
  flex: 1;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Status = styled.View<StatusStyleProps>`
  background-color: ${({ theme, type }) =>
    (type === "WITHIN" && theme.COLORS.GREEN_MID) ||
    (type === "OFF" && theme.COLORS.RED_MID)};

  width: 14px;
  height: 14px;

  border-radius: 999px;
`;
