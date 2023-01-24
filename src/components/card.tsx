import type { ReactElement, FC } from "react";

interface cardProps {
  children: ReactElement;
}
const Card: FC<cardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
