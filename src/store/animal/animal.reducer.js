import { ANIMAL_ACTIONS_TYPE } from './animal.types';

export const animalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ANIMAL_ACTIONS_TYPE.SET_ANIMALS_DATA: {
      return { ...state, animalsData: payload };
    }
    case ANIMAL_ACTIONS_TYPE.SET_SELECTED_ANIMAL:
      return { ...state, selectedAnimal: payload };
    case ANIMAL_ACTIONS_TYPE.SET_FILTERED_ANIMALS:
      return { ...state, filteredAnimals: payload };
    case ANIMAL_ACTIONS_TYPE.SET_PREGNANT_ANIMALS:
      return { ...state, pregnantAnimals: payload };
    case ANIMAL_ACTIONS_TYPE.SET_SEARCH_ANIMALS:
      return { ...state, searchAnimals: payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  animalsData: [],
  selectedAnimal: {},
  filteredAnimals: [],
  pregnantAnimals: [],
  searchAnimals: '',
};
