import { BASE_URL, RAWG_KEY } from '@configs';
import {
  GamesListType,
  SingleGameImagesListType,
  SingleGameType,
} from '@models/entities';
import { ErrorResponse } from '@utils/errorResponse';

export const getGamesList = async (
  queryParams?: URLSearchParams
): Promise<GamesListType> => {
  const result = await fetch(
    `${BASE_URL}/games?key=${RAWG_KEY}${
      queryParams ? `&${queryParams.toString()}` : ''
    }`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (!result.ok) {
    throw new ErrorResponse(result.status, 'Failed to fetch game list.');
  }

  const data = await result.json();
  return data.results as GamesListType;
};

export const getGameById = async (gameId: number): Promise<SingleGameType> => {
  const result = await fetch(`${BASE_URL}/games/${gameId}?key=${RAWG_KEY}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!result.ok) {
    throw new ErrorResponse(result.status, 'Failed to fetch specific game.');
  }

  return (await result.json()) as SingleGameType;
};

export const getGameScreenshotsById = async (
  gameId: number
): Promise<SingleGameImagesListType> => {
  const result = await fetch(
    `${BASE_URL}/games/${gameId}/screenshots?key=${RAWG_KEY}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  if (!result.ok) {
    throw new ErrorResponse(
      result.status,
      'Failed to fetch specific game images.'
    );
  }

  const data = await result.json();
  return data.results as SingleGameImagesListType;
};
