import { SectionList } from "react-native";
import styled, { css } from "styled-components/native";

export const Sections = styled.SectionList.attrs({
  contentContainerStyle: { gap: 8, paddingBottom: 304 },
})`` as unknown as typeof SectionList;

const Header = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
  `};

  width: 100%;

  flex-direction: row;

  align-items: baseline;
  justify-content: space-between;

  padding: 0 0 8px;
`;

const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

const Year = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Section = {
  Header,
  Date,
  Year,
};
