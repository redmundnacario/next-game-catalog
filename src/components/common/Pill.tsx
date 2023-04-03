import React from 'react';

import styles from '@styles/components/common/Pill.module.scss';

type PillPropsType = {
  text: string;
  handleAction?: () => void;
  iconClassName?: string;
};

const Pill: React.FC<PillPropsType> = ({
  text,
  handleAction,
  iconClassName,
}) => {
  return (
    <div data-testid="pill" className={styles.pill}>
      {text}
      {handleAction && (
        <i
          onClick={() => {
            if (handleAction) {
              handleAction();
            }
          }}
          className={`${iconClassName} ${styles.icon}`}
        ></i>
      )}
    </div>
  );
};

export default Pill;
