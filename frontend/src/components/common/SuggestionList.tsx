import React from 'react';

import { OptionType } from '@models/views';
import Pill from './Pill';

import styles from '@styles/components/common/SuggestionList.module.scss';

type SuggestionListPropsType = {
  options: Array<OptionType>;
  selectedOptions: Array<number | string>;
  handleClear: (value: number) => void;
};

const SuggestionList = (props: SuggestionListPropsType) => {
  const { options, selectedOptions, handleClear } = props;

  const filteredOptions = options.filter((item) =>
    selectedOptions.includes(item.value)
  );

  return (
    <div className={styles.suggestionList}>
      {filteredOptions.length > 0
        ? filteredOptions.map((item, index) => (
            <Pill
              key={index}
              text={item.text}
              handleAction={() => handleClear(parseInt(String(item.value), 10))}
              iconClassName={'fa fa-times'}
            />
          ))
        : null}
    </div>
  );
};

export default SuggestionList;
