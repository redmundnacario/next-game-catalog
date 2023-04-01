import { getPublicRuntimeConfig } from '@utils/getConfig';

export const BASE_URL =
  'https://free-to-play-games-database.p.rapidapi.com/api';

export const RAPID_API_KEY = getPublicRuntimeConfig('RAPID_API_KEY');
export const RAPID_API_HOST = getPublicRuntimeConfig('RAPID_API_HOST');
