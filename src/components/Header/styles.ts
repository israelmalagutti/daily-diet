import styled from "styled-components/native";

export const Container = styled.View`
  position: sticky;
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const ScreenName = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  flex: 1;
`;

export const NavigationButton = styled.TouchableOpacity``;

export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  border-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-width: 2px;
  border-radius: 999px;
`;
