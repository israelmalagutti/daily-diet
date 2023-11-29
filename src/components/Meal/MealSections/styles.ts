import { FlatList, SectionList } from "react-native";
import styled from "styled-components/native";

export const Sections = styled.SectionList.attrs({
  contentContainerStyle: { gap: 16 },
})`` as unknown as typeof SectionList;

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

export const SectionTitle = {
  Date,
  Year,
};

export const DateContainer = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: baseline;
  justify-content: space-between;
`;

export const MealsList = styled.FlatList`
  gap: 8px;
` as unknown as typeof FlatList;
