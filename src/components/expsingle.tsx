import { FC } from "react";
import type { ExpSingleProps } from "./types";

const ExpSingle: FC<ExpSingleProps> = ({ title, date, children }) => {
  return (
    <div>
      <div className="center spacebetween">
        <div className="column marginright">
          <a
            href="https://appsdeployer.com"
            target="_blank"
            className="title titlecolor"
          >
            {title}
          </a>
          <div className="date descolor">{date}</div>
        </div>
        <div id="el" className="description descolor">
          {children}
        </div>
      </div>

      <hr style={{ width: "50%" }} />
    </div>
  );
};

export default ExpSingle;
