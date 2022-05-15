import React from "react";
import cn from "classnames";

import styles from "./Radio.module.css";

export const Radio = ({
  className,
  name,
  hasIcon = true,
  checked = false,
  onChange = () => {},
  value,

  ...props
}) => {
  return (
    <div className={cn(styles._, className)}>
      <input
        type="radio"
        name={name}
        className={styles.input}
        onChange={onChange}
        value={value}
        checked={checked}
        hasIcon={hasIcon}
        {...props}
      />
      {hasIcon && <span className={styles.customRadio}></span>}
    </div>
  );
};
