import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "sm";
  bold?: boolean;
}

const AccentText = ({ children, size, bold = false }: Props) => {
  return (
    <span
      className={
        size === "sm"
          ? bold
            ? "text-primary font-bold"
            : "text-primary"
          : "text-2xl font-bold text-primary max-lg:text-lg"
      }
    >
      {children}
    </span>
  );
};

export default AccentText;
