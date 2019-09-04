import B from './b';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      b: typeof B;
    }
  }
}

global.b = B;

import './e';
