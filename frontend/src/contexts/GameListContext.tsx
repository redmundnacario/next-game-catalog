import React, { createContext, useContext, useState } from 'react';

import { useDebounce } from '@hooks/useDebounce';
import useFetchGameList from '@hooks/useFetchGameList';
import { GamesListType } from '@models/entities';

export type GameListContextType = {
  data: GamesListType | undefined;
  isLoading: boolean;
  error: boolean;
  platform: number | undefined;
  genre: Array<number>;
  sortBy: number | undefined;
  debouncedSearch: string;
  setPlatform: (value: number | undefined) => void;
  setGenre: (value: Array<number>) => void;
  setSortBy: (value: number | undefined) => void;
  setSearch: (value: string) => void;
};

const GameListContext = createContext<GameListContextType | undefined>(
  undefined
);

export function withGameListContextProvider<T extends GameListContextType>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  const GameListContextProvider: React.ComponentType<T> = (props) => {
    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useDebounce(search, 1000) as string;
    const [platform, setPlatform] = useState<number | undefined>(undefined);
    const [genre, setGenre] = useState<Array<number>>([]);
    const [sortBy, setSortBy] = useState<number | undefined>(undefined);

    const { data, isLoading, error } = useFetchGameList({
      platform,
      genre,
      sortBy,
      debouncedSearch,
    });

    return (
      <GameListContext.Provider
        value={{
          data,
          isLoading,
          error,
          platform,
          genre,
          sortBy,
          debouncedSearch,
          setPlatform,
          setGenre,
          setSortBy,
          setSearch,
        }}
      >
        <Component {...props} />
      </GameListContext.Provider>
    );
  };
  return GameListContextProvider;
}

export const useGameListContext = (): GameListContextType => {
  const context = useContext(GameListContext);
  if (!context) {
    throw new Error(
      'useGameListContext() hook has to be called in GameListContext.Provider'
    );
  }
  return context;
};
