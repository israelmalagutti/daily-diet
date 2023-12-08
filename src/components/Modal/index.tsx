import { ModalProps as RNModalProps } from "react-native";

import { Button } from "../Button";
import { type ButtonTypeStyleProps } from "../Button/styles";

import {
  ActionsContainer,
  Backdrop,
  Container,
  Message,
  StyledModal,
} from "./styles";

type ModalAction = {
  text: string;
  type?: ButtonTypeStyleProps;
  onPress: () => void;
};

type ModalProps = RNModalProps & {
  message: string;
  actions: ModalAction[];
};

export function Modal({ message, actions, visible, ...rest }: ModalProps) {
  return (
    <StyledModal
      {...rest}
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={visible}
    >
      <Backdrop />

      <Container>
        <Message numberOfLines={2}>{message}</Message>

        <ActionsContainer>
          {actions.map(action => (
            <Button
              key={action.text}
              type={action.type}
              size="SECONDARY"
              text={action.text}
              onPress={action.onPress}
            />
          ))}
        </ActionsContainer>
      </Container>
    </StyledModal>
  );
}
