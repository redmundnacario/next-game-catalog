import React from 'react';
import Dropdown from './DropDown';

import { genreOptions, platformOptions, sortOptions } from '@configs';

import styles from '@styles/components/common/Toolbar.module.scss';
import MultiSelect from './MultiSelect';

type ToolbarPropsType = {
  genre: Array<number>;
  setPlatform: (value: number | undefined) => void;
  setGenre: (value: Array<number>) => void;
  setSortBy: (value: number | undefined) => void;
};

const Toolbar: React.FC<ToolbarPropsType> = (props) => {
  const { setPlatform, genre, setGenre, setSortBy } = props;
  return (
    <div className={`${styles.toolBar} col-sm-12`}>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <Dropdown
          label={'Filter by Platform'}
          options={platformOptions}
          handleSelect={setPlatform}
        />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <MultiSelect
          label={'Filter by Category'}
          options={genreOptions}
          selectedOptions={genre}
          handleSelect={setGenre}
        />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <Dropdown
          label={'Sort by'}
          options={sortOptions}
          handleSelect={setSortBy}
        />
      </div>
    </div>
  );
};

export default Toolbar;
