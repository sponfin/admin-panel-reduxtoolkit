import React from "react";
import cn from "classnames";

import styles from "./ControlLabel.module.css";

export const ControlLabel = ({ className, control, label, ...props }) => {
  const classControllLabelChecked = cn(styles.label, {
    [styles.labelChecked]: control.props.checked,
    [styles.labelNoIcon]: !control.props.hasIcon,
  });

  return (
    <label className={cn(styles._, className)} {...props}>
      {control}
      <span className={classControllLabelChecked}>{label}</span>
    </label>
  );
};
