import { ModalProps as RNModalProps } from "react-native";

import { Button } from "../Button";

import {
  ActionsContainer,
  Backdrop,
  Container,
  Message,
  StyledModal,
} from "./styles.ts";

type ModalAction = {
  text: string;
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
              type="SECONDARY"
              text={action.text}
              onPress={action.onPress}
            />
          ))}
        </ActionsContainer>
      </Container>
    </StyledModal>
  );
}
