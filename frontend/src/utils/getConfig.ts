import { NextConfig } from 'next';
import getConfig from 'next/config';

const { publicRuntimeConfig = {}, serverRuntimeConfig = {} } =
  getConfig() as NextConfig;

export const getPublicRuntimeConfig = (key: string): string | undefined => {
  return publicRuntimeConfig[key];
};

export const getServerRuntimeConfig = (key: string): string | undefined => {
  return serverRuntimeConfig[key];
};
