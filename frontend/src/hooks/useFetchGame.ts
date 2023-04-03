import useSWR from 'swr';

import { SingleGameWithImagesType } from '@models/entities';
import { getGameById, getGameScreenshotsById } from '@services/freeToGame';

type UseFetchGamePropType = {
  id: number;
};

type UseFetchGameReturnType = {
  data: SingleGameWithImagesType | undefined;
  isLoading: boolean;
  error: boolean;
};

const useFetchGame = ({ id }: UseFetchGamePropType): UseFetchGameReturnType => {
  const url = id ? `/getGame?id=${id}` : null;

  const fetcher = async (): Promise<SingleGameWithImagesType | undefined> => {
    const response = await getGameById(id);
    const images = await getGameScreenshotsById(id);

    return { ...response, images };
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
    data,
    isLoading: isValidating,
    error,
  };
};

export default useFetchGame;
