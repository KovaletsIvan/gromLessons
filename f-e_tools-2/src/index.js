import { printProfile } from './profile.js';

const userData = {
  name: 'Tom',
  age: 17,
};
export const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);
