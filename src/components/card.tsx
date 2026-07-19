import type { FC } from "react";
import { cardProps } from "./types";

const Card: FC<cardProps> = ({ title, date, description }) => {
  return (
    <div className="exp-card reveal">
      <div className="exp-header">
        <h3 className="exp-role">
          {title}
        </h3>
        <span className="exp-company">{date}</span>
      </div>
      <p className="exp-desc">
        {description}
      </p>
    </div>
  );
};

export default Card;
