import React from "react";
import cn from "classnames";

import styles from "./TableRow.module.css";

export const TableRow = ({ className, children, header, ...props }) => {
  const classRow = cn(styles._, className, {
    [styles.header]: header,
  });

  return (
    <div className={classRow} {...props}>
      {children}
    </div>
  );
};
