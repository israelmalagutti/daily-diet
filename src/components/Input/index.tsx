import React, { useCallback, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";

import { Container, InputStyleProps, Label, StyledInput } from "./styles";

type InputProps = TextInputProps & {
  label: string;
  size?: InputStyleProps;

  onTextChange?: (text: string) => string | void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: () => void;
};

export function Input({
  label,
  size = "DEFAULT",

  onTextChange,
  onBlur,
  onFocus,

  ...rest
}: InputProps) {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);

  const handleTextChange = useCallback(
    (text: string) => {
      let inner_text = text;

      if (typeof onTextChange === "function")
        inner_text = onTextChange(text) || text;

      setValue(inner_text);
    },

    [onTextChange]
  );

  const handleBlur = useCallback(() => {
    if (typeof onBlur === "function") onBlur();
    setActive(false);
  }, [onBlur]);

  const handleFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (typeof onFocus === "function") onFocus(event);
      setActive(true);
    },
    [onFocus]
  );

  return (
    <Container size={size}>
      <Label>{label}</Label>

      <StyledInput
        {...rest}
        isActive={active}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChangeText={handleTextChange}
      />
    </Container>
  );
}
