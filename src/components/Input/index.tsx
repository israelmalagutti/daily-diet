import React, { useCallback, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";

import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";

import {
  Container,
  InputStyleProps,
  Label,
  StyledInput,
  StyledMaskedInput,
} from "./styles";

type InputProps = TextInputProps & {
  label: string;
  size?: InputStyleProps;

  maskType?: TextInputMaskTypeProp;
  maskOptions?: TextInputMaskOptionProp;

  onTextChange?: (text: string) => string | void;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: () => void;
};

export function Input({
  label,
  size = "DEFAULT",
  value: originalValue,

  maskType,
  maskOptions,

  onTextChange,
  onBlur,
  onFocus,

  ...rest
}: InputProps) {
  const [value, setValue] = useState<string>(originalValue ?? "");
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

      {maskType ? (
        // @ts-ignore
        <StyledMaskedInput
          {...rest}
          type={maskType}
          options={maskOptions}
          isActive={active}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
        />
      ) : (
        // @ts-ignore
        <StyledInput
          {...rest}
          isActive={active}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={handleTextChange}
        />
      )}
    </Container>
  );
}
