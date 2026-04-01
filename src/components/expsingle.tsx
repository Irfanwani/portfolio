import { FC } from "react";
import type { ExpSingleProps } from "./types";

const ExpSingle: FC<ExpSingleProps> = ({ title, date, children, href }) => {
  return (
    <div className="exp-item stagger-item">
      <div className="exp-item-header">
        <a href={href} target="_blank" rel="noreferrer" className="exp-company">
          {title}
        </a>
        <span className="exp-date-badge">{date}</span>
      </div>
      <div className="exp-desc">{children}</div>
    </div>
  );
};

export default ExpSingle;
