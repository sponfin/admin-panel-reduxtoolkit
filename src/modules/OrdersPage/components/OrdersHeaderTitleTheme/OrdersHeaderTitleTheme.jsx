import cn from "classnames";
import { Button } from "common/components";
import { ReactComponent as IconWhiteTheme } from "common/icons/sun.svg";

import styles from "./OrdersHeaderTitleTheme.module.css";

export const OrdersHeaderTitleTheme = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)}>
      <Button
        icon={IconWhiteTheme}
        size="large"
        theme="blue"
        onClick={() => {}}
      >
        Светлая
      </Button>
      {children}
    </div>
  );
};
