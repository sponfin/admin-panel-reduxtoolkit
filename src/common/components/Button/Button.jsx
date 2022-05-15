import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

export const Button = ({
  children,
  className,
  theme,
  size,
  icon: Icon,
  fullWidth,
  circularRotation,
  ...props
}) => {
  const classButton = cn(styles._, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles.iconOnly]: Icon && !children,
    [styles.fullWidth]: fullWidth,
  });

  const classIcon = cn(styles.icon, {
    [styles.circularRotation]: circularRotation,
  });

  return (
    <button className={classButton} {...props}>
      {Icon && <Icon className={classIcon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
