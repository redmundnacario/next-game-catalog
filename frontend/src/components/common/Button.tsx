import React, { ReactNode } from 'react';

import styles from '@styles/components/common/Button.module.scss';

type ButtonPropsType = {
  children: string | ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonPropsType> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
