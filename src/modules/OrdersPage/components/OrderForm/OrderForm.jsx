import cn from 'classnames';
import { ReactComponent as IconXLarge } from 'common/icons/x-large.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getShowOrderForm } from 'modules/OrdersPage/store/selectors';
import { closeOrderForm } from 'modules/OrdersPage/store';

import styles from './OrderForm.module.css';

export const OrderForm = ({ show }) => {
  const handleClick = () => {
    dispatch(closeOrderForm());
  };
  const classOrderForm = cn(styles._, {
    [styles.show]: show,
  });

  const classOverlay = cn({
    [styles.overlay]: show,
  });
  const dispatch = useDispatch();
  const { num } = useSelector(getShowOrderForm);
  return (
    <div className={classOverlay}>
      <div className={classOrderForm}>
        <div className={styles.header}>
          Заявка #{num}
          <button className={styles.btnClear} onClick={handleClick}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
