import React from 'react';

import { OptionType } from '@models/views';
import { Dropdown } from './Dropdown';
import SuggestionList from './SuggestionList';

type MultiSelectPropsType = {
  label: string;
  options: Array<OptionType>;
  selectedOptions: Array<number>;
  handleSelect: (value: Array<number>) => void;
};

export const MultiSelect: React.FC<MultiSelectPropsType> = (props) => {
  const { label, options, selectedOptions, handleSelect } = props;

  const handleSelectMultiple = (value: number) => {
    handleSelect(Array.from(new Set([...selectedOptions, value])));
  };

  const handleClear = (value: number) => {
    handleSelect([...selectedOptions].filter((item) => item !== value));
  };

  return (
    <div data-testid={'multi-select'}>
      <Dropdown
        label={label}
        options={options}
        handleSelect={handleSelectMultiple}
        isMultiSelect={true}
      />
      <SuggestionList
        options={options}
        selectedOptions={selectedOptions}
        handleClear={handleClear}
      />
    </div>
  );
};
