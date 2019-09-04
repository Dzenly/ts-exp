import B from '../b';

declare namespace NodeJS {
  interface Global {
    b: typeof B;
  }
}
