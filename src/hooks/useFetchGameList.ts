import useSWR from 'swr';

import { sortOptionsDictionary } from '@configs';
import { GamesListType } from '@models/entities';
import { getGamesList } from '@services/freeToGame';

type UseFetchGamePropType = {
  platform?: number;
  genre?: Array<number>;
  sortBy?: number;
  debouncedSearch?: string;
};

type UseFetchGameListReturnType = {
  data: GamesListType | undefined;
  isLoading: boolean;
  error: boolean;
};

const useFetchGameList = ({
  platform,
  genre = [],
  sortBy,
  debouncedSearch,
}: UseFetchGamePropType): UseFetchGameListReturnType => {
  console.log(sortBy);
  console.log(
    sortBy !== undefined && {
      ordering: sortOptionsDictionary[sortBy],
    }
  );
  const queryParams = new URLSearchParams({
    ...(platform !== undefined && { platforms: String(platform) }),
    ...(genre.length > 0 && { genres: genre.join(',') }),
    ...(sortBy !== undefined && {
      ordering: sortOptionsDictionary[sortBy],
    }),
    ...(debouncedSearch !== undefined && {
      search: debouncedSearch,
    }),
  });

  const url = `/getGamesList?` + queryParams.toString();

  const fetcher = async (): Promise<GamesListType> => {
    const response = await getGamesList(queryParams);

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
    data,
    isLoading: isValidating,
    error,
  };
};

export default useFetchGameList;
