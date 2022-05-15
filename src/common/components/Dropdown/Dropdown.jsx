import React from "react";
import cn from "classnames";

import styles from "./Dropdown.module.css";

export const Dropdown = ({ children, className }) => {
  const classDropdownGroup = cn(styles._, styles.dropdownGroup, className);
  return <div className={classDropdownGroup}>{children}</div>;
};
