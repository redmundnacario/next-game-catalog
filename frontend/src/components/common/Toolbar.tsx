import React from 'react';
import Dropdown from './DropDown';

import { platFormOptions } from '@configs';

import styles from '@styles/components/common/Toolbar.module.scss';

const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolBar}>
      <div className="col-lg-4">
        <Dropdown label={'Filter by Platform'} options={platFormOptions} />
      </div>
      <div className="col-lg-4">
        <Dropdown label={'Filter by Category'} options={platFormOptions} />
      </div>
      <div className="col-lg-4">
        <Dropdown label={'Sort by'} options={platFormOptions} />
      </div>
    </div>
  );
};

export default Toolbar;
