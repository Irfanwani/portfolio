import type { FC } from "react";
import { cardProps } from "./types";

const Card: FC<cardProps> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
