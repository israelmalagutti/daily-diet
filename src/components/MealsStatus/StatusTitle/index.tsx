import { Status, Text } from "./styles";

export type StatusTitleProps = {
  percentage?: number;

  title?: string | number;
  text?: "PRIMARY" | "SECONDARY" | string;
};

export function StatusTitle({
  percentage,

  title,
  text = "PRIMARY",
}: StatusTitleProps) {
  return (
    <>
      <Status>{(title && title) || (percentage && `${percentage}%`)}</Status>
      <Text>
        {(text === "PRIMARY" && "meals within the diet") ||
          (text === "SECONDARY" && "meals off the diet") ||
          (text && text)}
      </Text>
    </>
  );
}
