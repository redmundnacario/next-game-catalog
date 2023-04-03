import React, { ReactNode } from 'react';

import styles from '@styles/components/common/Button.module.scss';

type ButtonPropsType = {
  children: string | ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonPropsType> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} data-testid="button">
      {children}
    </button>
  );
};
