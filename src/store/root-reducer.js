import { combineReducers } from 'redux';

import { animalReducer } from './animal/animal.reducer';

export const rootReducer = combineReducers({
  animal: animalReducer,
});
