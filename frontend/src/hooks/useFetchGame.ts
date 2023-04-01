import useSWR from 'swr';

import { GamesListType, SingleGameType } from '@models/entities';
import { getGameById, getGamesList } from '@services/freeToGame';

type UseFetchGamePropType = {
  id?: number;
};

type UseFetchGameReturnType = {
  gamesList: GamesListType | SingleGameType | undefined;
  isLoading: boolean;
  error: boolean;
};

const useFetchGame = ({ id }: UseFetchGamePropType): UseFetchGameReturnType => {
  const url = id ? `/getGame?id=${id}` : '/getGamesList';

  const fetcher = async (): Promise<GamesListType | SingleGameType> => {
    let response;
    if (id) {
      response = await getGameById(id);
    } else {
      response = await getGamesList();
    }
    return response;
  };

  const { data, isValidating, error } = useSWR(url, fetcher, {
    fallbackData: undefined,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    revalidateOnReconnect: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    gamesList: data,
    isLoading: isValidating,
    error: error,
  };
};

export default useFetchGame;
