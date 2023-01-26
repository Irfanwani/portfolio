import { FC } from "react";
import type { ExpSingleProps } from "./types";

const ExpSingle: FC<ExpSingleProps> = ({ title, date, children, href }) => {
  return (
      <div className="expsingle spacebetween">
        <div className="column marginright">
          <a href={href} target="_blank" className="title titlecolor">
            {title}
          </a>
          <div className="date descolor">{date}</div>
        </div>
        <div id="el" className="description descolor">
          {children}
        </div>
      </div>
  );
};

export default ExpSingle;
