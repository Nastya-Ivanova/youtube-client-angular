import { RANDOM_STRING_LENGTH } from '../constants/random-string-length';

export const generateRandomString = () => {
  const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
  let str = '';
  for (let i = 0; i < RANDOM_STRING_LENGTH; i += 1) {
    str += chrs.charAt(Math.floor(Math.random() * RANDOM_STRING_LENGTH));
  }
  return str;
};
