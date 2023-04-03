import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { genreOptions, platformOptions } from '@configs/gameOptionsConstants';
import { Dropdown } from '@components/common/Dropdown';

describe('Dropdown', () => {
  it('should render and changes value when option was clicked', () => {
    const handleSelect = jest.fn();

    render(
      <Dropdown
        label={'Filter by Platform'}
        options={platformOptions}
        handleSelect={handleSelect}
        isMultiSelect={false}
      />
    );

    const dropDownElement = screen.getByTestId('select-sort-type');
    expect(dropDownElement).toBeInTheDocument();

    const firstOption = screen.getByTestId('option-1');
    const secondOption = screen.getByTestId('option-2');
    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();

    fireEvent.change(dropDownElement, { target: { value: '1' } });
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(1);
    expect(dropDownElement).toHaveDisplayValue('Xbox One');
  });

  it('if is Multiselect is true, should no change display value', () => {
    const handleSelect = jest.fn();

    render(
      <Dropdown
        label={'Filter by Platform'}
        options={platformOptions}
        handleSelect={handleSelect}
        isMultiSelect={true}
      />
    );

    const dropDownElement = screen.getByTestId('select-sort-type');

    fireEvent.change(dropDownElement, { target: { value: '1' } });
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(1);
    expect(dropDownElement).toHaveDisplayValue('Choose here...');
  });
});
