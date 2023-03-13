import { createAction } from '../../utils/reducer/reducer.utils';
import { ANIMAL_ACTIONS_TYPE } from './animal.types';

export const setAnimalsData = (data) =>
  createAction(ANIMAL_ACTIONS_TYPE.SET_ANIMALS_DATA, data);
export const setFilteredAnimals = (data) =>
  createAction(ANIMAL_ACTIONS_TYPE.SET_FILTERED_ANIMALS, data);
export const setPregnantAnimals = (data) =>
  createAction(ANIMAL_ACTIONS_TYPE.SET_PREGNANT_ANIMALS, data);
export const setSelectedAnimal = (data) =>
  createAction(ANIMAL_ACTIONS_TYPE.SET_SELECTED_ANIMAL, data);
export const setSearchAnimals = (data) =>
  createAction(ANIMAL_ACTIONS_TYPE.SET_SEARCH_ANIMALS, data);
