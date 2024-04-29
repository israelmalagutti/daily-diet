import { Status, Text } from "./styles";

export type StatusTitleProps = {
  title?: string;
  percentage?: string | number;

  text: string;
};

export function StatusTitle({ percentage, title, text }: StatusTitleProps) {
  const TITLE = (!!title && title) || (!!percentage && `${percentage}%`);

  const SUBTITLE = !!text && text;

  return (
    <>
      <Status>{TITLE}</Status>

      <Text>{SUBTITLE}</Text>
    </>
  );
}
