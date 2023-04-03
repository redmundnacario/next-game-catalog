import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { genreOptions } from '@configs/gameOptionsConstants';
import { MultiSelect } from '@components/common/MultiSelect';

describe('MultiSelect', () => {
  it('should render and changes value when option was clicked', () => {
    const handleSelect = jest.fn();

    render(
      <MultiSelect
        label={'Filter by Category'}
        options={genreOptions}
        selectedOptions={[]}
        handleSelect={handleSelect}
      />
    );

    const SelectElement = screen.getByTestId('multi-select');
    expect(SelectElement).toBeInTheDocument();
    const dropDownElement = screen.getByTestId('select-sort-type');
    expect(dropDownElement).toBeInTheDocument();
    const SuggestionListElement = screen.getByTestId('suggestion-list');
    expect(SuggestionListElement).toBeInTheDocument();

    const firstOption = screen.getByTestId('option-1');
    const secondOption = screen.getByTestId('option-2');
    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();

    fireEvent.change(dropDownElement, { target: { value: '4' } });
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith([4]);
    expect(dropDownElement).toHaveDisplayValue('Choose here...');
  });
});
