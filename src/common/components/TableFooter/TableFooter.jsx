import React from "react";

import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
