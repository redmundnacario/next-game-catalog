import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameCard from '@components/common/GameCard';

import { mockNextUseRouter } from '@tests/utils/mockUseRouter';

const sampleData = {
  id: 1,
  slug: 'hello',
  name: 'Hello',
  released: '2023-04-03T19:46:10.259Z',
  tba: false,
  background_image: 'sample-link-to-image',
  rating: 5,
};

describe('GameCard', () => {
  const mockPathName = mockNextUseRouter({
    route: '/',
    pathname: '/',
    query: '',
    asPath: `/`,
  });

  it('should render and changes value when option was clicked', () => {
    render(<GameCard data={sampleData} />);

    const CardElement = screen.getByTestId('game-card');
    expect(CardElement).toBeInTheDocument();

    const ButtonElement = screen.getByTestId('button');
    expect(ButtonElement).toBeInTheDocument();

    fireEvent.click(ButtonElement);
    expect(mockPathName()).toEqual('/1');
  });
});
