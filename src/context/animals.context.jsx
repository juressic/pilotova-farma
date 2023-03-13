import { createContext, useReducer } from 'react';

export const AnimalContext = createContext({
  animalsData: [],
  setAnimalsData: () => {},
  selectedAnimal: {},
  setSelectedAnimal: () => {},
  filteredAnimals: [],
  setFilteredAnimals: () => {},
  pregnantAnimals: [],
  setPregnantAnimals: () => {},
  searchAnimals: '',
  setSearchAnimals: () => {},
});

const ANIMAL_ACTIONS_TYPE = {
  SET_ANIMALS_DATA: 'SET_ANIMALS_DATA',
  SET_SELECTED_ANIMAL: 'SET_SELECTED_ANIMAL',
  SET_FILTERED_ANIMALS: 'SET_FILTERED_ANIMALS',
  SET_PREGNANT_ANIMALS: 'SET_PREGNANT_ANIMALS',
  SET_SEARCH_ANIMALS: 'SET_SEARCH_ANIMALS',
};

/*const animalReducer = (state, action) => {
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
      throw new Error(`Invalid action ${action.type}`);
  }
};*/

const INITIAL_STATE = {
  animalsData: [],
  selectedAnimal: {},
  filteredAnimals: [],
};

export const AnimalProvider = ({ children }) => {
  //const [animalsData, setAnimalsData] = useState([]);
  //const [selectedAnimal, setSelectedAnimal] = useState({});
  //const [filteredAnimals, setFilteredAnimals] = useState([]);

  /* const [
    {
      animalsData,
      selectedAnimal,
      filteredAnimals,
      pregnantAnimals,
      searchAnimals,
    },
    dispatch,
  ] = useReducer(animalReducer, INITIAL_STATE);*/

  /*const setAnimalsData = (data) => {
    dispatch({
      type: ANIMAL_ACTIONS_TYPE.SET_ANIMALS_DATA,
      payload: data,
    });
  };

  const setSelectedAnimal = (data) => {
    dispatch({
      type: ANIMAL_ACTIONS_TYPE.SET_SELECTED_ANIMAL,
      payload: data,
    });
  };

  const setFilteredAnimals = (data) => {
    dispatch({
      type: ANIMAL_ACTIONS_TYPE.SET_FILTERED_ANIMALS,
      payload: data,
    });
  };

  const setSearchAnimals = (data) => {
    dispatch({
      type: ANIMAL_ACTIONS_TYPE.SET_SEARCH_ANIMALS,
      payload: data,
    });
  };
*/
  /*useEffect(() => {
    fetch(
      'https://pilotova-farma.banovina-agrar.hr/pilotova-farma/api/govedo/read.php'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Getting data', data.data);
        setFilteredAnimals(data.data);
        return setAnimalsData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);*/

  /*const setPregnantAnimals = (data) => {
    dispatch({ type: ANIMAL_ACTIONS_TYPE.SET_PREGNANT_ANIMALS, payload: data });
  };*/

  const value = {
    /*animalsData,
    setAnimalsData,
    selectedAnimal,
    setSelectedAnimal,
    filteredAnimals,
    setFilteredAnimals,
    pregnantAnimals,
    setPregnantAnimals,
    searchAnimals,
    setSearchAnimals,*/
  };

  return (
    <AnimalContext.Provider value={value}>{children}</AnimalContext.Provider>
  );
};
