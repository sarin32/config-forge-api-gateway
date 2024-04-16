// environment level constants

import * as dotEnv from 'dotenv';

dotEnv.config();

const env = process.env;

export const PORT = Number(env.PORT!);

export const ENDPOINTS = {
  API: env.ENDPOINT_API!,
  FRONTEND: env.ENDPOINT_FRONTEND!,
};
