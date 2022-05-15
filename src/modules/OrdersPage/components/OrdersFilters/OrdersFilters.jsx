import cn from 'classnames';
import {
  OrdersSearchbar,
  OrdersFiltersPanel,
} from 'modules/OrdersPage/components';

import { useSelector } from 'react-redux';
import { getValueOrdersFilters } from 'modules/OrdersPage/store/selectors';

import { useState } from 'react';

import styles from './OrdersFilters.module.css';

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter(i => i !== item) : arr.concat(item);

export const OrdersFilters = ({ className }) => {
  const initialState = {
    dateFrom: '',
    dateTo: '',
    sumFrom: '',
    sumTo: '',
    statusOrder: [],
  };

  const [filters, setFilters] = useState(initialState);

  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setFilters({
      ...filters,
      statusOrder: xor(filters.statusOrder, value),
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleClear = ({ currentTarget: { name } }) => {
    setFilters({
      ...filters,
      [name]: '',
    });
  };

  const handleClearAllFilters = () => {
    setFilters(initialState);
  };

  const { isVisibleFilters } = useSelector(getValueOrdersFilters);

  return (
    <div className={cn(styles._, className)}>
      <OrdersSearchbar onClearAllFilters={handleClearAllFilters} />
      {isVisibleFilters && (
        <OrdersFiltersPanel
          className={styles.blockFiltersPanel}
          onChange={handleChange}
          onClear={handleClear}
          filters={filters}
          onChangeStatus={handleChangeCheckboxStatus}
        />
      )}
    </div>
  );
};
