import React from 'react';

import styles from '@styles/components/common/PageShell.module.scss';

type PageShellProps = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
};

const PageShell: React.FC<PageShellProps> = (props) => {
  const { title, subTitle } = props;
  return (
    <div className={styles.pageShell}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div className={`container ${styles.mainBody}`}>{props.children}</div>
    </div>
  );
};

export default PageShell;
