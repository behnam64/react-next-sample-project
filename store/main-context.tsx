import { createContext, useContext } from 'react';
import { colorSchemeEnum } from '../interfaces/shared';

const MainContextInit = createContext({
  colorScheme: colorSchemeEnum.light
});

interface mainStore {
  colorScheme: colorSchemeEnum
}

export function MainContext({ children }: any) {
  let sharedState: mainStore = {
    colorScheme: colorSchemeEnum.light
  }

  return (
    <MainContextInit.Provider value={sharedState}>
      {children}
    </MainContextInit.Provider>
  );
}

export function useAppContext() {
  return useContext(MainContextInit);
}