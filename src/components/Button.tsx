import { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};
