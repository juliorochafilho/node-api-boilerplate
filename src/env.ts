import dotenv from 'dotenv';
dotenv.config({
  path:
    process.env.NODE_ENV === 'test'
      ? '.env.test'
      : process.env.NODE_ENV === 'dev'
      ? '.env.dev'
      : '.env',
});