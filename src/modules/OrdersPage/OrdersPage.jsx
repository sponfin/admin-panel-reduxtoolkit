import { mockOrders } from 'modules/OrdersPage/constants/mockOrders';

import {
  OrdersTable,
  OrdersHeader,
  OrdersFilters,
} from 'modules/OrdersPage/components';

import styles from './OrdersPage.module.css';

export const OrdersPage = () => {
  const orders = mockOrders;

  return (
    <div className={styles.wrapper}>
      <OrdersHeader className={styles.wrapperHeader} />
      <OrdersFilters className={styles.wrapperFilters} />
      <OrdersTable orders={orders} />
    </div>
  );
};
