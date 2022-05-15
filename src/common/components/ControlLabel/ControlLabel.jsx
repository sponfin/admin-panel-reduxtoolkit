import React from 'react';
import cn from 'classnames';

import styles from './ControlLabel.module.css';

export const ControlLabel = ({
  className,
  control,
  label,
  noIcon,
  ...props
}) => {
  const classControllLabelChecked = cn(styles.label, {
    [styles.labelChecked]: control.props.checked,
    [styles.labelNoIcon]: noIcon,
  });

  return (
    <label className={cn(styles._, className)} {...props}>
      {control}
      <span className={classControllLabelChecked}>{label}</span>
    </label>
  );
};
