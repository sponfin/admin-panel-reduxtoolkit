import React from "react";
import cn from "classnames";

import styles from "./Label.module.css";

export const Label = ({ label, className, htmlFor }) => {
  const classLabel = cn(styles._, className);

  return (
    <label className={classLabel} htmlFor={htmlFor}>
      {label}
    </label>
  );
};
