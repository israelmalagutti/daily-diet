import styled, { css } from "styled-components/native";

export const StatisticsContainer = styled.View`
  gap: 12px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const Container = styled.View`
  position: absolute;

  height: 85%;

  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  padding: 32px 24px 0;
  gap: 24px;

  border-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  text-align: center;
`;

export const Container2 = styled.View`
  flex-direction: row;

  gap: 12px;
`;
