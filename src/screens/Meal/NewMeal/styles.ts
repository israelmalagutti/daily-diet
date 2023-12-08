import styled, { css } from "styled-components/native";

export const FormContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
  `};

  position: absolute;

  height: 93%;

  right: 0;
  bottom: 0;
  left: 0;

  padding: 40px 24px 32px;
  gap: 24px;

  border-radius: 20px;
`;

export const FormWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 24,
  },
})``;

const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_100};
  `};

  flex-direction: row;

  width: 100%;
`;

export const DateWrapper = styled(Wrapper)`
  gap: 20px;
`;

export const DietPickerWrapper = styled.View`
  gap: 4px;
`;

export const DietPickerContainer = styled(Wrapper)`
  gap: 12px;
`;
