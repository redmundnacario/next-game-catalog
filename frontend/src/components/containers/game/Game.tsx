import React from 'react';

import useFetchGame from '@hooks/useFetchGame';
import Spinner from '@components/common/Spinner';
import SingleGamePage from '@components/common/SingleGamePage';

const Game: React.FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = useFetchGame({ id: parseInt(id, 10) });

  return !isLoading ? (
    <div>
      {!error ? (
        data ? (
          <SingleGamePage data={data} />
        ) : (
          <div>No games were fetched or matched that search.</div>
        )
      ) : (
        <div>Something went wrong in fetching games.</div>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default Game;
