import { colorSchemeEnum } from './../interfaces/shared';
import { createStore } from 'redux';

export interface stateInterface {
  colorScheme: colorSchemeEnum
}

const initialState = {
  colorScheme: colorSchemeEnum.light
};

const counterReducer = (state: stateInterface = initialState, action: any) => {
  if (action.type === 'color-scheme') {
    return {
      colorScheme: action.text
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;