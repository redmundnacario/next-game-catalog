import React, { FC } from 'react';

import { OptionType } from '@models/views';

import styles from '@styles/components/common/Dropdown.module.scss';

type DropdownPropsType = {
  label: string;
  options: Array<OptionType>;
  handleSelect: (value: number) => void;
  isMultiSelect?: boolean;
};

const Dropdown: FC<DropdownPropsType> = (props) => {
  const { label, options, handleSelect, isMultiSelect = false } = props;
  return (
    <div className={styles.dropdown}>
      <div>{label}</div>
      <select
        data-testid={'select-sort-type'}
        className={styles.inputSelect}
        name="sort-type"
        id="sort-type"
        onChange={(e) => {
          const { value } = e.target as HTMLSelectElement;
          if (value) {
            handleSelect(parseInt(value, 10));
          }
          if (isMultiSelect) {
            e.target.value = '';
          }
        }}
      >
        <option value="">Choose here...</option>
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
