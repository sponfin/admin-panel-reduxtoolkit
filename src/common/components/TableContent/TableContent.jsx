import styles from "./TableContent.module.css";

export const TableContent = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
