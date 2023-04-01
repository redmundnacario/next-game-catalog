import React, { FC } from 'react';

import styles from '@styles/components/common/Dropdown.module.scss';

type DropdownPropsType = {
  // handleOnChange: (value: string) => void;
  label: string;
  options: Array<{
    text: string;
    value: string | number;
  }>;
};

const Dropdown: FC<DropdownPropsType> = (props) => {
  const {
    // handleOnChange,
    label,
    options,
  } = props;
  return (
    <div>
      <div>{label}</div>
      <select
        data-testid={'select-sort-type'}
        className={styles.inputSelect}
        name="sort-type"
        id="sort-type"
        defaultValue="newest"
        onChange={() => {
          // handleOnChange(e.target.value);
        }}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            data-testid={'newest-option'}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
