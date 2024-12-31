import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface IContext {
  role: string | null;
  setRole: Dispatch<SetStateAction<string | null>>;
}

export const Context = createContext<IContext>({
  role: null,
  setRole: () => {},
});
