import cn from "classnames";
import { Input, Dropdown, ControlLabel, Checkbox } from "common/components";

import { useState } from "react";

import styles from "./DropdownStatus.module.css";

export const DropdownStatus = ({
  className,
  valueStatus,
  onChangeStatus,

  filters,
}) => {
  const [isDroped, setDroped] = useState(false);

  const handleDropClick = () => {
    setDroped(!isDroped);
  };

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.input}
        name="statusOrder"
        value={valueStatus}
        onDropClick={handleDropClick}
        isDroped={isDroped}
        placeholder="Выберите статус заказа"
      >
        {isDroped && (
          <Dropdown className={styles.dropdown}>
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Новый"
                  checked={filters.statusOrder.includes("Новый")}
                  hasIcon={true}
                />
              }
              label="Новый"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Расчет"
                  checked={filters.statusOrder.includes("Расчет")}
                  hasIcon={true}
                />
              }
              label="Расчет"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Подтержден"
                  checked={filters.statusOrder.includes("Подтержден")}
                  hasIcon={true}
                />
              }
              label="Подтвержден"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отложен"
                  checked={filters.statusOrder.includes("Отложен")}
                  hasIcon={true}
                />
              }
              label="Отложен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Выполнен"
                  checked={filters.statusOrder.includes("Выполнен")}
                  hasIcon={true}
                />
              }
              label="Выполнен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отменен"
                  checked={filters.statusOrder.includes("Отменен")}
                  hasIcon={true}
                />
              }
              label="Отменен"
            />
          </Dropdown>
        )}
      </Input>
    </div>
  );
};
