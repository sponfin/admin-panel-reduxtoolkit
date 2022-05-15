import cn from 'classnames';
import {
  OrdersHeaderTitle,
  OrdersHeaderTitleTheme,
} from 'modules/OrdersPage/components';

import styles from './OrdersHeader.module.css';

export const OrdersHeader = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles._, className)}>
      <OrdersHeaderTitle>Список заказов</OrdersHeaderTitle>
      <OrdersHeaderTitleTheme></OrdersHeaderTitleTheme>
      {children}
    </div>
  );
};
