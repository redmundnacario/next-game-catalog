import React from 'react';

import GameCard from '@components/common/GameCard';
import Spinner from '@components/common/Spinner';
import { GamesListType } from '@models/entities';

import styles from '@styles/components/containers/games/GameList.module.scss';

type GameListPropType = {
  data: GamesListType | undefined;
  isLoading: boolean;
};

const GameList: React.FC<GameListPropType> = (props) => {
  const { data, isLoading } = props;
  return !isLoading ? (
    <div className={styles.gameList}>
      {data !== undefined ? (
        data.length > 0 ? (
          data.map((item, index) => <GameCard data={item} key={index} />)
        ) : (
          <div>No games matched that search.</div>
        )
      ) : (
        <div>Something went wrong in fetching games.</div>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default GameList;
