import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '@components/common/Button';

describe('Button', () => {
  it('should render and can be clicked', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>hello</Button>);

    const ButtonElement = screen.getByTestId('button');
    expect(ButtonElement).toBeInTheDocument();

    fireEvent.click(ButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
