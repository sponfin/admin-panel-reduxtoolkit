import cn from "classnames";
// import { OrdersLoad } from 'modules/OrdersPage/components';

import styles from "./OrdersHeaderTitle.module.css";

export const OrdersHeaderTitle = ({ className, children, ...props }) => {
  return <div className={cn(styles._, className)}>{children}</div>;
};
